
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-item");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
      slide.classList.toggle("active", i === index);
    });
  }

  document.getElementById("nextSlide").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  document.getElementById("prevSlide").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // Auto-slide
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 7000);
});
