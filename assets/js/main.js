// スクロールで要素がふわっと現れる
(function () {
  var els = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    els.forEach ? els.forEach(function (el) { el.classList.add('is-visible'); }) : null;
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
