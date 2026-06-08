// AIProver — interactions

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Count-up stats
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const dur = 1400;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = target % 1 === 0 ? Math.floor(eased * target) : (eased * target).toFixed(1);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCount(e.target);
        statObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => statObserver.observe(el));

// Graceful image fallback to initials avatar
document.querySelectorAll("img.avatar").forEach((img) => {
  img.addEventListener("error", () => {
    const fb = img.nextElementSibling;
    if (fb && fb.classList.contains("avatar-fallback")) {
      img.style.display = "none";
      fb.style.display = "grid";
    }
  });
});

// Rotate highlight across hero research-direction tags
const directionTags = document.querySelectorAll(".hero-directions .hero-direction");
if (directionTags.length) {
  let active = 0;
  directionTags[active].classList.add("hero-direction-accent");
  const rotateDirections = () => {
    directionTags[active].classList.remove("hero-direction-accent");
    active = (active + 1) % directionTags.length;
    directionTags[active].classList.add("hero-direction-accent");
  };
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(rotateDirections, 2200);
  }
}
