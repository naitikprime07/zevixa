// PMX ads loader - shared across all pages (single source of truth)
// Injects the pmx11 ad div at the top of <body> on every page.
(function () {
    var container = document.createElement('div');
    container.id = 'pmx11';

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pmx-cdn.pubmonetx.workers.dev/inline-PMX1027.js';
    container.appendChild(s);

    document.body.insertBefore(container, document.body.firstChild);
})();
