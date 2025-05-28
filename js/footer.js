
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
<footer class="bg-primary text-white pt-16 pb-10 px-6" role="contentinfo">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

    <!-- LOGO -->
    <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
      <img src="images/logo.png" alt="Logo Montataire Basket-ball" class="h-24 md:h-28 w-auto rounded-full shadow-lg bg-white/10 p-2" loading="lazy" decoding="async">
      <p class="text-sm text-gray-200">Club officiel de basket à Montataire depuis 1982</p>
    </div>

    <!-- CONTACT -->
    <div class="text-sm text-white space-y-2 text-center md:text-left">
      <h2 class="text-lg font-semibold mb-2">Nous contacter</h2>
      <p><span class="inline-block w-5">📍</span> Complexe Sportif Marcel Coene</p>
      <p>60160 Montataire, France</p>
      <p><span class="inline-block w-5">📧</span> <a href="mailto:montatairebb@gmail.com" class="hover:text-secondary underline">montatairebb@gmail.com</a></p>
    </div>

    <!-- RÉSEAUX SOCIAUX -->
    <div class="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
      <h2 class="text-lg font-semibold">Suivez-nous</h2>
      <div class="flex justify-center md:justify-end space-x-6">
        <a href="https://www.instagram.com/montataire_basket_ball/" target="_blank" aria-label="Instagram" class="hover:text-secondary transition">
          <svg class="w-6 h-6 text-white hover:text-secondary fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54.39,54.39,0,0,0-30.83-30.83C292.73,120,224,120,224,120s-68.73,0-93.88,10.84a54.39,54.39,0,0,0-30.83,30.83C88.45,157.81,88.45,192,88.45,192s0,34.19,10.84,59.34a54.39,54.39,0,0,0,30.83,30.83C155.27,292,224,292,224,292s68.73,0,93.88-10.84a54.39,54.39,0,0,0,30.83-30.83c10.84-25.15,10.84-59.34,10.84-59.34S359.55,157.81,348.71,161.66ZM224,270.16A48.16,48.16,0,1,1,272.16,222,48.21,48.21,0,0,1,224,270.16Zm76.19-86.58a11.2,11.2,0,1,1,11.2-11.2A11.2,11.2,0,0,1,300.19,183.58ZM398.8,97.5A94.78,94.78,0,0,0,350.5,49.2C319.6,36.2,224,36.2,224,36.2s-95.6,0-126.5,13A94.78,94.78,0,0,0,49.2,97.5C36.2,128.4,36.2,224,36.2,224s0,95.6,13,126.5A94.78,94.78,0,0,0,97.5,398.8c30.9,13,126.5,13,126.5,13s95.6,0,126.5-13a94.78,94.78,0,0,0,48.3-48.3c13-30.9,13-126.5,13-126.5S411.8,128.4,398.8,97.5ZM384,350.5a66.8,66.8,0,0,1-37.5,37.5c-26,10.4-87.6,8-122.5,8s-96.5,2.4-122.5-8A66.8,66.8,0,0,1,64,350.5c-10.4-26-8-87.6-8-122.5s-2.4-96.5,8-122.5A66.8,66.8,0,0,1,101.5,68c26-10.4,87.6-8,122.5-8s96.5-2.4,122.5,8a66.8,66.8,0,0,1,37.5,37.5c10.4,26,8,87.6,8,122.5S394.4,324.5,384,350.5Z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/MontataireBasketball" target="_blank" aria-label="Facebook" class="hover:text-secondary transition">
          <svg class="w-6 h-6 text-white hover:text-secondary fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.2V288z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- BAS DE PAGE -->
  <div class="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300 space-y-3">
    <div class="flex flex-wrap justify-center gap-4">
      <a href="mentions-legales.html" class="hover:text-white underline">Mentions légales</a>
      <a href="confidentialite.html" class="hover:text-white underline">Politique de confidentialité</a>
      <a href="cgu.html" class="hover:text-white underline">CGU</a>
    </div>
    <p>&copy; 2025 Montataire Basket-ball — Tous droits réservés</p>
  </div>
</footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
