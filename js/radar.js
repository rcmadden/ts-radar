/* Shared version and impact rules, used by both dashboards and the local server. */
(function(root) {
  const compare=(a,b)=>{
    const aa=String(a||'').split('.').map(Number), bb=String(b||'').split('.').map(Number);
    for(let n=0;n<Math.max(aa.length,bb.length);n++){const d=(aa[n]||0)-(bb[n]||0);if(d)return d;}
    return 0;
  };
  const series=v=>String(v||'').split('.').slice(0,2).join('.');
  function milestones(current,releases) {
    const versions=[...new Set(releases.map(r=>typeof r==='string'?r:r.version))].sort(compare);
    const bySeries={}; versions.forEach(v=>bySeries[series(v)]=v);
    const latest=versions.at(-1)||current;
    const target=bySeries[series(current)]&&compare(bySeries[series(current)],current)>0
      ?bySeries[series(current)]:Object.values(bySeries).sort(compare).find(v=>compare(v,current)>0)||current;
    const stable=Object.values(bySeries).filter(v=>compare(v,current)>=0&&Number(v.split('.')[2]||0)>=4).sort(compare).at(-1);
    // Keep every role even when two roles refer to the same release.
    return [{key:'current',label:'Current',version:current},{key:'target',label:'Target',version:target},
      ...(stable?[{key:'stable',label:'Stable',version:stable}]:[]),{key:'latest',label:'Latest',version:latest}];
  }
  function inRange(v,r) {
    return (!r.version||compare(v,r.version)===0)
      &&(!r.startIncluding||compare(v,r.startIncluding)>=0)
      &&(!r.startExcluding||compare(v,r.startExcluding)>0)
      &&(!r.endIncluding||compare(v,r.endIncluding)<=0)
      &&(!r.endExcluding||compare(v,r.endExcluding)<0);
  }
  function fixedVersions(issue,resolved) {
    const id=String(issue.workId||'').replace(/^W-/, '');
    return [...(issue.fixedVersions||[]),...resolved.filter(r=>id&&r.id===id).map(r=>r.v)];
  }
  function stateAt(issue,version,resolved=[]) {
    if(issue.affectedRanges) {
      if(issue.affectedRanges.some(r=>inRange(version,r)))return 'open';
      if((issue.fixedVersions||[]).some(v=>series(v)===series(version)&&compare(version,v)>=0))return 'fixed';
      // A bounded advisory in this branch is fixed only beyond its upper bound.
      if(issue.affectedRanges.some(r=>{
        const end=r.endExcluding||r.endIncluding;
        return end&&series(end)===series(version)&&compare(version,end)>=(r.endExcluding?0:1);
      }))return 'fixed';
      return null;
    }
    const found=[...(issue.allVersions||[])].sort(compare);
    if(!found.length)return issue.statusType==='closed'?'closed':'unknown';
    if(compare(found[0],version)>0)return null;
    const fixes=fixedVersions(issue,resolved).filter(v=>series(v)===series(version)).sort(compare);
    if(fixes.length&&compare(version,fixes[0])>=0)return 'fixed';
    if(issue.statusType==='closed')return 'closed';
    if(fixes.length)return 'open';
    if(['Solution Scheduled','Solution Deploying'].includes(issue.status))return 'open';
    // Deployed does not tell us which installed builds received the fix.
    if(issue.statusType==='fixed')return 'unknown';
    return 'open';
  }
  function visible(issue,current,resolved=[]) {
    if(stateAt(issue,current,resolved)&&stateAt(issue,current,resolved)!=='fixed')return true;
    if(issue.affectedRanges)return issue.affectedRanges.some(r=>{
      const end=r.endExcluding||r.endIncluding||r.version;
      return !end||compare(series(end),series(current))>=0;
    });
    return !issue.allVersions?.length||issue.allVersions.some(v=>compare(series(v),series(current))>=0);
  }
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmtStamp=ts=>{const m=String(ts||'').match(/^(\d{4}-\d{2}-\d{2})(?:T(\d{2}:\d{2}))?/);return m?(m[1]+(m[2]?' '+m[2]+' UTC':'')):'unknown';};
  async function loadState() {
    let config=typeof RADAR_CONFIG==='undefined'?{}:RADAR_CONFIG;
    try {const response=await fetch('/api/settings',{cache:'no-store'});if(response.ok)config=await response.json();}catch{}
    return config;
  }
  function watchState(config){
    const loaded=Date.now();
    window.addEventListener('storage',e=>{if(e.key==='radar-update')location.reload();});
    const check=async()=>{
      if(document.hidden)return;
      try{
        const response=await fetch('/api/settings',{cache:'no-store'});
        if(response.ok&&(await response.json()).currentVersion!==config.currentVersion){location.reload();return;}
        const status=await fetch('/api/refresh',{cache:'no-store'});
        if(status.ok&&Date.parse((await status.json()).finished)>loaded)location.reload();
      }catch{}
    };
    window.addEventListener('focus',check);setInterval(check,15000);
  }
  const api={compare,series,milestones,inRange,fixedVersions,stateAt,visible,escape,fmtStamp,loadState,watchState};
  root.Radar=api;
  if(typeof module!=='undefined')module.exports=api;
})(globalThis);
