/* Meridian — page behaviour.
   No dependencies, no build step, matching the design system's plain-HTML
   approach. Everything here degrades to a perfectly usable page if it
   never runs. */
(function () {
  'use strict';

  /* ----------------------------------------------------------------------
     Accent

     The source design exposed the accent as a three-option prop. It lives
     on <html data-accent> so CSS does the work; this only lets you preview
     the other two without editing the file: ?accent=ink-blue
     ---------------------------------------------------------------------- */
  var ACCENTS = ['rich-navy', 'ink-blue', 'original-red'];

  var requested = new URLSearchParams(window.location.search).get('accent');
  if (requested && ACCENTS.indexOf(requested) !== -1) {
    document.documentElement.setAttribute('data-accent', requested);
  }

  /* ----------------------------------------------------------------------
     Portrait

     The design used a drop-target placeholder. Here it's a real <img>:
     drop a file at assets/portrait.jpg and it appears. Until then the
     frame falls back to its labelled placeholder rather than a broken icon.
     ---------------------------------------------------------------------- */
  var frame = document.querySelector('.portrait__frame');
  if (frame) {
    var img = frame.querySelector('img');
    var markEmpty = function () { frame.classList.add('is-empty'); };

    if (img.complete) {
      if (!img.naturalWidth) markEmpty();
    } else {
      img.addEventListener('error', markEmpty);
    }
  }

  /* ----------------------------------------------------------------------
     Nav — mark the section currently in view
     ---------------------------------------------------------------------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav__link'));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var setCurrent = function (id) {
      links.forEach(function (link) {
        if (link.getAttribute('href') === '#' + id) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ----------------------------------------------------------------------
     Enquiry

     The design specifies the button but not where it goes. Rather than
     invent a destination, both enquiry buttons raise an event — point it
     at a form, a mailto: or a scheduler when there is one to point at.
     ---------------------------------------------------------------------- */
  document.querySelectorAll('[data-action="enquire"]').forEach(function (button) {
    button.addEventListener('click', function () {
      document.dispatchEvent(new CustomEvent('meridian:enquire', {
        detail: { source: button.textContent.trim() }
      }));
    });
  });
})();
