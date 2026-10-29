/* ==========================================================================
   BizWeb KH CRM — REHEARSAL backend configuration (Neon).
   REHEARSAL ONLY. Never deploy this folder to crm.bizwebkh.com.

   Public, browser-safe values only. There is no secret in this file: the Neon Auth
   URL and the API URL are public endpoints; every request is authorised by the
   signed-in user's token and re-checked on the server.

   Architecture B:  Browser -> Neon Auth -> Neon Function API -> Neon PostgreSQL

   Default target = the DISPOSABLE write-test branch (rh-real-w1). The golden imported
   copy (rh-real) must not receive test writes. To point a browser at another stack for a
   test, run once in the console:  localStorage.setItem('bz_cfg', JSON.stringify({api:'…', auth:'…'}))
   ========================================================================== */
(function(){
  var cfg = {
    mode: 'rehearsal',
    api:  'https://br-misty-hall-a1w02zqd-crm.compute.c-1.ap-southeast-1.aws.neon.tech',
    auth: 'https://ep-little-smoke-a1ryr7rb.neonauth.ap-southeast-1.aws.neon.tech/neondb/auth'
  };
  try{
    var o = JSON.parse(localStorage.getItem('bz_cfg') || 'null');
    if(o && typeof o.api === 'string' && typeof o.auth === 'string'){ cfg.api = o.api; cfg.auth = o.auth; }
  }catch(e){ /* ignore */ }
  cfg.api = cfg.api.replace(/\/+$/, '');
  window.BZ_CONFIG = cfg;
})();
