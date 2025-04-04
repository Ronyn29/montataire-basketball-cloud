document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
<header class="bg-primary text-white sticky top-0 z-40 shadow-md transition-all duration-300" role="banner">
  <div class="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
    
    <!-- LOGO + BURGER -->
    <div class="flex justify-between items-center w-full md:w-auto">
      <a href="index.html" aria-label="Accueil" class="mb-3 md:mb-0">
        <img src="images/logo.png" alt="Logo Montataire Basket-ball" class="h-16 md:h-20 transition hover:scale-105 hover:rotate-[-5deg]" width="80" height="80" loading="lazy">
      </a>
      <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-secondary p-2 rounded" aria-label="Ouvrir le menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- NAVIGATION -->
    <nav id="main-nav" class="hidden md:block w-full md:w-auto mt-3 md:mt-0" aria-label="Navigation principale">
      <ul class="flex flex-col md:flex-row flex-wrap justify-center gap-1 md:gap-4 text-sm md:text-base">

        <li><a href="histoire.html" class="block px-3 py-2 hover:text-secondary transition">Histoire</a></li>

        <!-- VIE DU CLUB -->
        <li class="relative group">
          <button class="flex items-center px-3 py-2 hover:text-secondary transition dropdown-btn" aria-haspopup="true">
            Vie du Club
            <svg class="w-4 h-4 ml-1 transform transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <ul class="dropdown-menu absolute left-0 mt-0 w-64 bg-primary rounded-md shadow-lg py-1 hidden group-hover:block group-focus-within:block z-50 text-sm">
            <li><a href="reglement.html" class="block px-4 py-2 hover:bg-blue-800">Fonctionnement & Règlement</a></li>
            <li><a href="tarifs.html" class="block px-4 py-2 hover:bg-blue-800">Cotisations & Inscriptions</a></li>
            <li><a href="dirigeants.html" class="block px-4 py-2 hover:bg-blue-800">Équipe encadrante</a></li>
            <li><a href="planning.html" class="block px-4 py-2 hover:bg-blue-800">Entraînements & Matchs</a></li>
            <li><a href="arbitrage.html" class="block px-4 py-2 hover:bg-blue-800">École d’arbitrage</a></li>
          </ul>
        </li>

        <li><a href="partenaires.html" class="block px-3 py-2 hover:text-secondary transition">Partenaires</a></li>

        <!-- ÉQUIPES -->
        <li class="relative group">
          <button class="flex items-center px-3 py-2 hover:text-secondary transition dropdown-btn" aria-haspopup="true">
            Équipes
            <svg class="w-4 h-4 ml-1 transform transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <ul class="dropdown-menu absolute left-0 mt-0 w-56 bg-primary rounded-md shadow-lg py-1 hidden group-hover:block group-focus-within:block">
            <li><a href="equipes-seniors.html" class="block px-4 py-2 hover:bg-blue-800">Seniors</a></li>
            <li><a href="equipes-jeunes.html" class="block px-4 py-2 hover:bg-blue-800">Jeunes</a></li>
            <li><a href="equipes-loisirs.html" class="block px-4 py-2 hover:bg-blue-800">Loisirs</a></li>
          </ul>
        </li>

        <li><a href="actualites.html" class="block px-3 py-2 hover:text-secondary transition">Actualités</a></li>
        <li><a href="contact.html" class="block px-3 py-2 hover:text-secondary transition">Contact</a></li>
        <li><a href="inscription.html" class="block px-3 py-2 bg-secondary text-white rounded-md hover:bg-red-600 transition">S'inscrire</a></li>
      </ul>
    </nav>
  </div>
</header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
