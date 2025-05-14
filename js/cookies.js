document.addEventListener("DOMContentLoaded", () => {
  const consent = localStorage.getItem("cookieConsent");

  // Si pas de consentement enregistré, injecte la bannière
  if (!consent) {
    const banner = document.createElement("div");
    banner.id = "cookie-consent";
    banner.className = "fixed bottom-4 left-4 right-4 max-w-4xl mx-auto bg-white border border-gray-300 shadow-xl rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 animate-fade-in";
    banner.innerHTML = `
      <p class="text-sm text-gray-700">
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.
        <a href="confidentialite.html" class="underline">En savoir plus</a>
      </p>
      <div class="flex gap-2">
        <button id="accept-cookies" class="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-700">Accepter</button>
        <button id="reject-cookies" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300">Refuser</button>
      </div>
    `;
    document.body.appendChild(banner);

    // Gestion des clics
    document.getElementById("accept-cookies").onclick = () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.remove();
    };

    document.getElementById("reject-cookies").onclick = () => {
      localStorage.setItem("cookieConsent", "rejected");
      banner.remove();
    };
  }
});
