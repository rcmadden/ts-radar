(async()=>{
  const config=await Radar.loadState();
  Radar.watchState(config);
  const current=config.currentVersion||KI_CURRENT_VERSION;
  const milestones=Radar.milestones(current,SERVER_RELEASES);
  const issues=[...KNOWN_ISSUES,...SECURITY_ISSUES].filter(i=>Radar.visible(i,current,ISSUES));
  const el=id=>document.getElementById(id), esc=Radar.escape;
  let statuses=new Set(['open','unknown']), impact='all', release='all', query='', sort='reports';
  el('cur').textContent=current;
  el('env').textContent='⚙ Environment: '+(config.envNotes||KI_ENV_NOTES);
  el('dataGen').textContent=Radar.fmtStamp([KI_GENERATED,SECURITY_GENERATED].sort().pop());
  el('kicount').textContent=issues.length;
  milestones.forEach(m=>{
    const button=document.createElement('button');button.className='chip impactChip';button.dataset.impact=m.key;
    button.textContent='Affects '+m.label+' ('+m.version+')';el('impactGroup').appendChild(button);
  });
  [...new Set(issues.flatMap(i=>i.allVersions||[]))].sort(Radar.compare).forEach(v=>{
    const option=document.createElement('option');option.value=v;option.textContent=v;el('verSelect').appendChild(option);
  });
  const at=(i,m)=>Radar.stateAt(i,m.version,ISSUES);
  const selected=()=>milestones.find(m=>m.key===impact)||milestones[0];
  const base=()=>issues.filter(i=>(release==='all'||i.allVersions?.includes(release))&&
    (!query||[i.title,i.summary,i.id,i.workId,i.name].some(s=>String(s||'').toLowerCase().includes(query))));
  function choose(key,states){impact=key;statuses=new Set(states);render();}
  el('verSelect').onchange=e=>{release=e.target.value;render();};
  el('search').oninput=e=>{query=e.target.value.toLowerCase();render();};
  el('sortSelect').onchange=e=>{sort=e.target.value;render();};
  document.querySelectorAll('.statusChip').forEach(c=>c.onclick=()=>{
    if(statuses.has(c.dataset.status))statuses.delete(c.dataset.status);else statuses.add(c.dataset.status);render();
    el('stats')?.scrollIntoView({behavior:'smooth',block:'start'});
  });
  document.querySelectorAll('.impactChip').forEach(c=>c.onclick=()=>{impact=c.dataset.impact;render();el('stats')?.scrollIntoView({behavior:'smooth',block:'start'});});
  function render(){
    document.querySelectorAll('.statusChip').forEach(c=>{
      c.classList.toggle('active',statuses.has(c.dataset.status));c.setAttribute('aria-pressed',statuses.has(c.dataset.status));
    });
    document.querySelectorAll('.impactChip').forEach(c=>{
      c.classList.toggle('active',impact===c.dataset.impact);c.setAttribute('aria-pressed',impact===c.dataset.impact);
    });
    const pool=base(), milestone=selected();
    // All includes future issues, evaluated at their first relevant milestone.
    const state=i=>impact==='all'?(at(i,milestones[0])||milestones.map(m=>at(i,m)).find(Boolean)||i.statusType):at(i,milestone);
    const rows=pool.filter(i=>statuses.has(state(i)));
    if(sort==='title')rows.sort((a,b)=>a.title.localeCompare(b.title));
    else rows.sort((a,b)=>Number(b[sort]||0)-Number(a[sort]||0));
    el('tbody').innerHTML=rows.map(i=>{
      const status=state(i), active=milestones.filter(m=>['open','unknown'].includes(at(i,m)));
      const detail=i.affectedRanges?(i.evidence?'Tableau vendor advisory; upstream dependency CVE':'Confirmed advisory range'):status==='unknown'?'Fix version or affected version needs verification':'Potential impact; reported in this or an earlier release';
      const fixes=Radar.fixedVersions(i,ISSUES);
      const fixText=fixes.length?' · '+(i.requiredAction?'Server update in ':'Fixed in ')+fixes.join(', '):'';
      const labels={open:'Affected',unknown:'Verify',fixed:'Fixed',closed:'Closed'};
      const safeUrl=/^https?:\/\//.test(i.url||'')?i.url:'#';
      return '<tr><td><span class="status status-'+status+'">'+esc(status==='fixed'&&i.fixLabel?i.fixLabel:labels[status])+'</span><div class="summary">'+esc(i.status)+'</div></td>'+
        '<td><span class="foundin">'+esc(i.foundIn||'Not specified')+'</span></td><td><span class="id">'+esc(i.name||i.workId||i.id)+'</span></td>'+
        '<td><div class="title">'+esc(i.title)+'</div><div class="summary">'+esc(i.summary)+'</div><div class="summary">'+esc(detail+fixText)+'</div>'+
        (i.requiredAction?'<div class="summary">'+esc(i.requiredAction)+'</div>':'')+
        '<a class="ico" href="'+esc(safeUrl)+'" target="_blank" rel="noopener">'+(i.affectedRanges?'view security advisory':'view issue')+'</a></td>'+
        '<td>'+Number(i.reports||0)+'</td><td>'+active.map(m=>'<span class="impact '+(m.key==='current'?'impact-yes':'impact-maybe')+'">'+m.label+'</span>').join(' ')+'</td></tr>';
    }).join('');
    el('empty').classList.toggle('hidden',rows.length>0);
    el('stats').textContent='Showing '+rows.length+' of '+issues.length+' relevant issues'+(impact==='all'?' across versions':' for '+milestone.label+' '+milestone.version)+'.';
    el('reconcileGrid').innerHTML='';
    milestones.forEach(m=>{
      const counts={open:0,unknown:0,fixed:0,closed:0};pool.forEach(i=>{const s=at(i,m);if(s)counts[s]++;});
      const card=document.createElement('div');card.className='ver-card '+m.key+(impact===m.key?' selected':'');
      const action=document.createElement('button');action.className='card-action';
      action.setAttribute('aria-label','Show active issues for '+m.label+' '+m.version);
      action.innerHTML='<div class="ver-name">'+esc(m.version)+' ('+m.label+')</div><div class="ver-count open-count">'+counts.open+'</div><div class="ver-label">open / affected · '+counts.unknown+' need verification</div>';
      action.onclick=()=>choose(m.key,['open','unknown']);card.appendChild(action);
      Object.entries(counts).forEach(([s,count])=>{
        const button=document.createElement('button');button.className='count-action';button.dataset.status=s;button.dataset.version=m.version;
        button.textContent=count+' '+({open:'affected',unknown:'verify',fixed:'fixed',closed:'closed'}[s]);
        button.setAttribute('aria-label','Show '+count+' '+s+' issues for '+m.label+' '+m.version);
        button.onclick=()=>choose(m.key,[s]);card.appendChild(button);
      });
      el('reconcileGrid').appendChild(card);
    });
  }
  render();
})();
