// PubMonetX loader (PMX1027 / host: pmx11).
//
// Shared across every page. Injects the equivalent of:
//
//     <div id="pmx11">
//         <script async src="https://pmx-cdn.pubmonetx.workers.dev/inline-PMX1027.js"></script>
//     </div>
//
// as the first child of <body>. Referenced once per page from <head> as:
//
//     <script defer src="/assets/js/pmx-loader.js"></script>
//
// Keeping this in one file means the CDN URL and host-id live in exactly one
// place. To change networks or the host id, edit only this file.

(function () {
    'use strict';

    var HOST_ID = 'pmx11';
    var SRC_URL = 'https://pmx-cdn.pubmonetx.workers.dev/inline-PMX1027.js';

    function mount() {
        // Avoid double-mount if the script somehow runs twice.
        if (document.getElementById(HOST_ID)) return;

        var host = document.createElement('div');
        host.id = HOST_ID;

        var remote = document.createElement('script');
        remote.async = true;
        remote.src = SRC_URL;

        host.appendChild(remote);
        document.body.insertBefore(host, document.body.firstChild);
    }

    if (document.readyState === 'loading') {
        // `defer` guarantees this listener fires once body is available and
        // before DOMContentLoaded handlers on the same tick.
        document.addEventListener('DOMContentLoaded', mount, { once: true });
    } else {
        mount();
    }
})();
