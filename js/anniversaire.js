async function afficherAnniversaire() {
  try {
    const response = await fetch('data/licencies_anniversaires.json');
    const licencies = await response.json();
    const today = new Date();
    const moisJour = today.toISOString().slice(5, 10);

    const anniversaire = licencies.find(licencie =>
      licencie.dateNaissance.slice(5, 10) === moisJour
    );

    if (anniversaire) {
      const message = document.createElement("div");
      message.className = "fixed top-5 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black px-6 py-3 rounded-full shadow-lg animate-bounce z-50";
      message.innerHTML = `🎉 Joyeux anniversaire <strong>${anniversaire.prenom}</strong> ! Toute l'équipe du Montataire Basket-ball te souhaite une superbe journée !`;
      document.body.appendChild(message);
      setTimeout(() => message.remove(), 10000);
    }
  } catch (error) {
    console.error("Erreur de chargement des anniversaires :", error);
  }
}
document.addEventListener("DOMContentLoaded", afficherAnniversaire);
