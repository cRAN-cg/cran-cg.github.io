// Typewriter: one text node, type → hold → erase → next.
// Single mutation point makes phrase overlap (the old site's bug) impossible.
(function () {
  var el = document.getElementById('typed');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = 'Chiranjeev Gupta.';
    return;
  }

  var phrases = [
    'Chiranjeev Gupta.',
    'a software engineer.',
    'building dev tools.',
    'an explorer.',
    'a foodie.',
  ];
  var TYPE_MS = 62;
  var ERASE_MS = 34;
  var HOLD_MS = 2100;

  var idx = 0;

  function type(text, pos) {
    el.textContent = text.slice(0, pos);
    if (pos < text.length) {
      setTimeout(function () { type(text, pos + 1); }, TYPE_MS);
    } else {
      setTimeout(erase, HOLD_MS);
    }
  }

  function erase() {
    var current = el.textContent;
    if (current.length > 0) {
      el.textContent = current.slice(0, -1);
      setTimeout(erase, ERASE_MS);
    } else {
      idx = (idx + 1) % phrases.length;
      type(phrases[idx], 0);
    }
  }

  // First phrase is already in the markup (works without JS); start the
  // loop by holding on it, then cycling.
  setTimeout(erase, HOLD_MS);
})();
