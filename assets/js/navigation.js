function minimizeNavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Enhance dropdown menus and add reveal-on-scroll animations
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown handling: toggle .open on the dropdown-content for CSS transitions
  document.querySelectorAll('.dropdown').forEach(function (dd) {
    const btn = dd.querySelector('button');
    const content = dd.querySelector('.dropdown-content');
    if (!btn || !content) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      content.classList.toggle('open');
    });
  });

  // Close any open dropdown when clicking outside
  window.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown .dropdown-content.open').forEach(function (el) {
      if (!el.parentElement.contains(e.target)) {
        el.classList.remove('open');
      }
    });
  });

  // Reveal on scroll using IntersectionObserver
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Target paper cards and their key children
    document.querySelectorAll('.paper-card, .paper-card img, .paper-card h2').forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
});
