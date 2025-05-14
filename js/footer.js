document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
<footer class="bg-primary text-white px-6 pt-16 pb-8">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    <!-- LOGO + RESEAUX -->
    <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
      <img src="images/logo.png" alt="Logo Montataire Basket-ball" class="h-20 w-auto" loading="lazy">
      <p class="text-sm text-gray-300">Club officiel de basket à Montataire</p>
      <div class="flex space-x-4 mt-2">
        <a href="https://www.instagram.com/montatairebasketball" target="_blank" aria-label="Instagram" class="hover:text-secondary transition">
          <i class="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://www.facebook.com/MontataireBasketball" target="_blank" aria-label="Facebook" class="hover:text-secondary transition">
          <i class="fab fa-facebook-f text-xl"></i>
        </a>
      </div>
    </div>

    <!-- INFOS CLUB -->
    <div class="text-sm space-y-3 text-center md:text-left">
      <h4 class="text-lg font-semibold text-white mb-2">Nous contacter</h4>
      <p>📍 Complexe Sportif Marcel Coene</p>
      <p>60160 Montataire, France</p>
      <p>📧 <a href="mailto:montatairebb@gmail.com" class="hover:text-secondary">montatairebb@gmail.com</a></p>
    </div>

    <!-- GOOGLE MAPS -->
    <div class="w-full h-48 rounded-md overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.621008368819!2d2.424839315673082!3d49.2710703793255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6416f8d86d4d1%3A0x58c88b0e34076831!2sComplexe%20Sportif%20Marcel%20Coene!5e0!3m2!1sfr!2sfr!4v1712123456789"
        width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>

  <!-- BARRE BAS DE PAGE -->
  <div class="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300 space-y-2">
    <div class="flex flex-wrap justify-center gap-4">
      <a href="mentions-legales.html" class="hover:text-white underline">Mentions légales</a>
      <a href="confidentialite.html" class="hover:text-white underline">Politique de confidentialité</a>
      <a href="cgu.html" class="hover:text-white underline">CGU</a>
    </div>
    <p class="mt-2">&copy; 2025 Montataire Basket-ball — Tous droits réservés</p>
  </div>
</footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
