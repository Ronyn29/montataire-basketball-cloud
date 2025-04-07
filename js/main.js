// Vérifie si l'utilisateur a déjà accepté ou refusé les cookies
window.onload = function () {
  const consent = localStorage.getItem('cookieConsent'); // Vérifie si un consentement est déjà enregistré

  if (!consent) {
    document.getElementById('cookie-consent').style.display = 'block'; // Affiche la bannière si pas de consentement
  }

  // Action lorsque l'utilisateur accepte les cookies
  document.getElementById('accept-cookies').onclick = function () {
    localStorage.setItem('cookieConsent', 'accepted'); // Sauvegarde l'acceptation des cookies
    document.getElementById('cookie-consent').style.display = 'none'; // Cache la bannière
  };

  // Action lorsque l'utilisateur refuse les cookies
  document.getElementById('reject-cookies').onclick = function () {
    localStorage.setItem('cookieConsent', 'rejected'); // Sauvegarde le refus des cookies
    document.getElementById('cookie-consent').style.display = 'none'; // Cache la bannière
  };
};
