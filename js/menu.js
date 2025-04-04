document.addEventListener("DOMContentLoaded", () => {
  // === MENU BURGER MOBILE ===
  const burgerBtn = document.getElementById("mobile-menu-button");
  const nav = document.getElementById("main-nav");

  if (burgerBtn && nav) {
    burgerBtn.addEventListener("click", () => {
      nav.classList.toggle("hidden");
      burgerBtn.setAttribute("aria-expanded", nav.classList.contains("hidden") ? "false" : "true");
    });
  }

  // === DROPDOWN MENUS ===
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((btn) => {
    const dropdownMenu = btn.nextElementSibling;

    // Pour desktop : affichage au survol (géré par le CSS .group)
    // Pour mobile : clic pour afficher/masquer
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Ferme les autres dropdowns (optionnel)
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.add("hidden");
        }
      });

      // Toggle current menu
      dropdownMenu.classList.toggle("hidden");
    });

    // Optionnel : refermer si clic en dehors
    document.addEventListener("click", (event) => {
      if (!btn.parentElement.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  });
});
