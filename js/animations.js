document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target); // Animation une seule fois
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedElements.forEach((el) => {
    el.classList.add("opacity-0", "translate-y-6", "transition", "duration-1000");
    observer.observe(el);
  });
});
