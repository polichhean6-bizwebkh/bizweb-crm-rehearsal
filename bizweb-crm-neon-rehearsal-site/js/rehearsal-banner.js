/* Small internal marker so the rehearsal site cannot be mistaken for production. */
(function(){
  function add(){
    if(document.getElementById('bzRehearsalBadge')) return;
    var d=document.createElement('div'); d.id='bzRehearsalBadge'; d.textContent='REHEARSAL';
    d.title='Rehearsal build: copy of the data, connected to the Neon rehearsal backend. Not the live CRM.';
    d.style.cssText='position:fixed;left:8px;bottom:8px;z-index:2147483000;background:#b45309;color:#fff;font:700 11px/1 system-ui,sans-serif;letter-spacing:.08em;padding:5px 8px;border-radius:4px;opacity:.92;pointer-events:none';
    document.body.appendChild(d);
  }
  if(document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();
