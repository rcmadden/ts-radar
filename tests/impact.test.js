const assert=require('node:assert/strict');
const R=require('../js/radar');
const releases=['2025.3','2025.3.8','2025.3.11','2026.2','2026.2.4','2026.3'];
assert.deepEqual(R.milestones('2025.3.8',releases).map(m=>m.version),['2025.3.8','2025.3.11','2026.2.4','2026.3']);
assert.equal(R.milestones('2025.3.11',releases)[1].version,'2026.2.4','Next-series upgrade target uses its newest patch');
assert.equal(R.milestones('2026.2',releases)[1].version,'2026.2.4');
assert(R.milestones('2026.3',releases).every(m=>m.version==='2026.3'));
assert.equal(R.milestones('2025.3.8',[...releases,'2026.3.1'])[3].version,'2026.3.1','Zero-fix releases still advance latest');
const security={affectedRanges:[{startIncluding:'2025.3',endExcluding:'2025.3.9'}]};
assert.equal(R.stateAt(security,'2025.3.8'),'open');
assert.equal(R.stateAt(security,'2025.3.9'),'fixed');
assert.equal(R.stateAt(security,'2025.3.11'),'fixed');
assert.equal(R.stateAt(security,'2026.2'),null,'No extrapolation of bounded CVEs into another branch');
assert(R.inRange('2025.3.8',{endIncluding:'2025.3.8'}));
assert(!R.inRange('2025.3.8',{endExcluding:'2025.3.8'}));
const historical={allVersions:['2024.2'],statusType:'open'};
assert(R.visible(historical,'2025.3.8'));
assert.equal(R.stateAt(historical,'2025.3.8'),'open','Historical open issue carried forward for review');
const scheduled={allVersions:['2025.3.8'],statusType:'open',status:'Solution Scheduled'};
assert.equal(R.stateAt(scheduled,'2025.3.8'),'open');
assert.equal(R.stateAt({...scheduled,statusType:'fixed'},'2025.3.8'),'open','Correct legacy snapshots that misclassified scheduled fixes');
assert.equal(R.stateAt({allVersions:['2025.3'],statusType:'fixed'},'2025.3.8'),'unknown');
const bug={allVersions:['2025.3.2'],statusType:'fixed',workId:'W-123'};
const resolved=[{id:'123',v:'2025.3.9'}];
assert.equal(R.stateAt(bug,'2025.3.8',resolved),'open');
assert.equal(R.stateAt(bug,'2025.3.9',resolved),'fixed');
assert.equal(R.stateAt(bug,'2026.2',resolved),'unknown','A fix in one branch cannot prove another branch is fixed');
assert.equal(R.stateAt({allVersions:[],statusType:'open'},'2025.3.8'),'unknown');
const certificateAdvisory=require('../data/vendor-advisories.json').find(i=>i.id==='CVE-2026-111943');
assert(certificateAdvisory);
for(const v of ['2024.2.30','2025.1.20','2025.3.8','2025.3.9','2025.3.10','2026.2.3']){
  assert.equal(R.stateAt(certificateAdvisory,v),'open','Certificate advisory affects '+v);
}
for(const v of ['2025.1.21','2025.3.11','2025.3.12','2026.2.4','2026.3']){
  assert.equal(R.stateAt(certificateAdvisory,v),'fixed','October Server update covers '+v);
}
assert.equal(R.stateAt(certificateAdvisory,'2027.1'),null,'Do not infer coverage of an unverified future series');
console.log('Impact and upgrade regression checks passed');
