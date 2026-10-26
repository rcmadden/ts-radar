(async()=>{
  const el=id=>document.getElementById(id);
  let config=RADAR_CONFIG, available=false, running=false, completion=null, polling=false;
  const announce=()=>{try{localStorage.setItem('radar-update',String(Date.now()));}catch{}};
  function draw(){
    el('milestones').innerHTML=Radar.milestones(config.currentVersion,SERVER_RELEASES).map(m=>
      '<div class="milestone">'+m.label+'<b>'+Radar.escape(m.version)+'</b></div>').join('');
    el('saveVersion').disabled=!available||running;el('refreshData').disabled=!available||running;
    el('currentVersion').disabled=running;
  }
  async function request(path,body){
    const tokenInput=el('adminToken'),token=tokenInput.value.trim();
    if(token)try{sessionStorage.setItem('radar-admin-token',token);}catch{}
    const headers={'Content-Type':'application/json'};
    if(token)headers['Authorization']='Bearer '+token;
    const response=await fetch(path,{method:'POST',headers,body:JSON.stringify(body)});
    const data=await response.json();if(!response.ok)throw Error(data.error||'Request failed');return data;
  }
  try{
    const response=await fetch('/api/settings',{cache:'no-store'});
    if(!response.ok)throw Error('Admin server unavailable');config=await response.json();available=true;
  }catch{el('serverNotice').hidden=false;}
  try{const saved=sessionStorage.getItem('radar-admin-token');if(saved)el('adminToken').value=saved;}catch{}
  el('dataDates').textContent='Last successful data: resolved '+Radar.fmtStamp(DATA_GENERATED)+' · known '+Radar.fmtStamp(KI_GENERATED)+' · security '+Radar.fmtStamp(SECURITY_GENERATED)+'.';
  [...SERVER_RELEASES].sort((a,b)=>Radar.compare(a.version,b.version)).forEach(r=>{
    const option=document.createElement('option');option.value=r.version;el('releaseOptions').appendChild(option);
  });
  el('currentVersion').value=config.currentVersion;
  draw();
  el('versionForm').onsubmit=async e=>{
    e.preventDefault();el('saveVersion').disabled=true;
    try{config=await request('/api/settings',{currentVersion:el('currentVersion').value.trim()});el('currentVersion').value=config.currentVersion;draw();announce();
      el('message').className='success';el('message').textContent='Current version saved. Both dashboards now use '+config.currentVersion+'.';
    }catch(error){el('message').className='error';el('message').textContent=error.message;draw();}
  };
  async function poll(){
    if(!available||polling)return;polling=true;
    try{
      const response=await fetch('/api/refresh',{cache:'no-store'});if(!response.ok)throw Error('Refresh status unavailable');
      const status=await response.json();running=status.running;draw();
      const stateHtml=s=>{
        const cls=s.state==='updated'?'success':(s.state==='failed'?'error':'notice');
        return '<span class="'+cls+'">'+Radar.escape(s.state)+'</span>';
      };
      el('refreshStatus').innerHTML=(status.started?'Started '+new Date(status.started).toLocaleString()+'\n':'')+
        Object.entries(status.sources).map(([name,s])=>Radar.escape(name)+': '+stateHtml(s)+(s.retained?' — previous data retained':'')+(s.error?'\n'+Radar.escape(s.error):'')).join('\n')+
        (status.finished?'\nFinished '+new Date(status.finished).toLocaleString():'');
      if(completion&&status.finished&&status.finished!==completion){announce();completion=status.finished;
        // Load newly generated catalog and dates by reloading after completion.
        location.reload();}
    }catch(error){el('refreshStatus').textContent=error.message;}finally{polling=false;}
  }
  el('refreshData').onclick=async()=>{
    el('refreshData').disabled=true;
    try{const token=el('token').value;await request('/api/refresh',token?{token}:{});el('token').value='';
      completion='pending';running=true;draw();await poll();
    }catch(error){el('refreshStatus').textContent=error.message;draw();}
  };
  await poll();if(running)completion='pending';setInterval(poll,2000);
})();
