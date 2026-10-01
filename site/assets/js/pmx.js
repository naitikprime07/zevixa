// PubMonetX snippet (PMX1027 / host: pmx11) — single source of truth.
//
// Every page loads this file with a plain <script src> at the spot where the
// ad host should appear (top of <body>). document.write runs synchronously
// during parsing, so the markup below is injected exactly where the call sits
// — identical to pasting the raw snippet, but maintained in one file.
//
// To change publisher id / CDN URL / host id later, edit ONLY this file.

document.write(
    '<div id="pmx11">' +
    '<script async src="https://pmx-cdn.pubmonetx.workers.dev/inline-PMX1027.js"><\/script>' +
    '</div>'
);
