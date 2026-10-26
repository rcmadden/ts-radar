const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'..');
async function load(page,current='2025.3.8',fixture=false){
  const html=fs.readFileSync(path.join(root,page),'utf8');
  const dom=new JSDOM(html,{url:'http://localhost:8765/'+page,runScripts:'outside-only'});
  dom.window.fetch=async url=>({ok:true,json:async()=>url==='/api/settings'?{currentVersion:current,envNotes:'Test environment'}:{running:false,sources:{}}});
  dom.window.setInterval=()=>0;
  dom.window.HTMLElement.prototype.scrollIntoView=()=>{};
  for(const match of html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)){
    if(fixture&&match[1]==='js/known-issues.js')new vm.Script(`SECURITY_ISSUES.push({id:'TEST-CVE',name:'TEST-CVE',title:'Regression security fixture',summary:'Version boundary test',status:'Advisory',statusType:'open',allVersions:['2025.3'],affectedRanges:[{startIncluding:'2025.3',endExcluding:'2025.3.9'}],url:'https://example.com/advisory'});`).runInContext(dom.getInternalVMContext());
    new vm.Script(match[1]?fs.readFileSync(path.join(root,match[1]),'utf8'):match[2]).runInContext(dom.getInternalVMContext());
  }
  await new Promise(resolve=>setImmediate(resolve));
  return dom;
}
(async()=>{
  for(const current of ['2025.3.8','2026.2.4','2026.3']){
    const resolved=await load('index.html',current),known=await load('known-issues.html',current);
    assert.equal(resolved.window.document.querySelector('#cur').textContent,current);
    assert.equal(known.window.document.querySelector('#cur').textContent,current);
    const cardCount=known.window.document.querySelectorAll('.ver-card').length;
    assert.equal(cardCount,current==='2026.3'?3:4);
    // Every status count must open exactly the number of rows printed on it.
    for(let c=0;c<cardCount;c++)for(const status of ['open','unknown','fixed','closed']){
      const button=known.window.document.querySelectorAll('.ver-card')[c].querySelector('[data-status="'+status+'"]');
      const count=parseInt(button.textContent,10);button.click();
      assert.equal(known.window.document.querySelectorAll('#tbody tr').length,count,current+' '+c+' '+status);
    }
    resolved.window.close();known.window.close();
  }
  const dom=await load('known-issues.html','2025.3.8',true),doc=dom.window.document;
  const search=doc.querySelector('#search');search.value='Regression security fixture';search.dispatchEvent(new dom.window.Event('input'));
  doc.querySelector('[data-impact="current"]').click();
  assert.equal(doc.querySelectorAll('#tbody tr').length,1);
  assert(doc.querySelector('#tbody').textContent.includes('TEST-CVE'));
  assert.equal(doc.querySelector('.ver-card.current [data-status="open"]').textContent,'1 affected');
  doc.querySelector('[data-impact="target"]').click();assert.equal(doc.querySelectorAll('#tbody tr').length,0);
  doc.querySelector('.ver-card.target [data-status="fixed"]').click();assert.equal(doc.querySelectorAll('#tbody tr').length,1);
  doc.querySelector('.ver-card.current .card-action').click();assert.equal(doc.querySelectorAll('#tbody tr').length,1);
  dom.window.close();
  for(const current of ['2025.3.8','2025.3.11']){
    const certificate=await load('known-issues.html',current),certificateDoc=certificate.window.document;
    const input=certificateDoc.querySelector('#search');input.value='CVE-2026-111943';input.dispatchEvent(new certificate.window.Event('input'));
    certificateDoc.querySelector('[data-impact="current"]').click();
    assert.equal(certificateDoc.querySelectorAll('#tbody tr').length,current==='2025.3.8'?1:0);
    assert.equal(certificateDoc.querySelector('.ver-card.current [data-status="open"]').textContent,current==='2025.3.8'?'1 affected':'0 affected');
    const target=certificateDoc.querySelector('.ver-card.target [data-status="fixed"]');
    assert.equal(target.textContent,'1 fixed');target.click();
    assert(certificateDoc.querySelector('#tbody').textContent.includes('Server patched'));
    assert(certificateDoc.querySelector('#tbody').textContent.includes('OS certificate updates are required on every node'));
    certificate.window.close();
  }
  const admin=await load('admin.html');assert.equal(admin.window.document.querySelector('#currentVersion').value,'2025.3.8');
  assert.equal(admin.window.document.querySelector('#saveVersion').disabled,false);admin.window.close();
  const versions=await load('versions.html');const versionsDoc=versions.window.document;
  assert.equal(versionsDoc.querySelectorAll('.release').length,3);
  assert(versionsDoc.querySelector('.release.current h2').textContent.startsWith('site-v0.2.1'));
  assert(versionsDoc.querySelector('.release.previous .badge').textContent.includes('Previous release'));
  versions.window.close();
  console.log('Dashboard DOM checks passed: card counts, search, version upgrades, security boundary, admin');
})().catch(error=>{console.error(error);process.exit(1);});
