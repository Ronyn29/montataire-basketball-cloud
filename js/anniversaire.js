
// 🎉 Script pour afficher un message d'anniversaire
const anniversaires = [
  { prenom: "Léa", date: "04-30" },
  { prenom: "Yanis", date: "05-01" },
  { prenom: "Nora", date: "06-15" }
];

function afficherAnniversaire() {
  const today = new Date();
  const moisJour = today.toISOString().slice(5, 10); // "MM-DD"

  const anniversaireDuJour = anniversaires.find(licencie => licencie.date === moisJour);

  if (anniversaireDuJour) {
    const message = document.createElement("div");
    message.className = "fixed top-5 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black px-6 py-3 rounded-full shadow-lg animate-bounce z-50";
    message.innerHTML = `🎉 Joyeux anniversaire <strong>${anniversaireDuJour.prenom}</strong> ! Toute l'équipe du Montataire Basket-ball te souhaite une superbe journée !`;

    document.body.appendChild(message);

    // Retire le message au bout de 10 secondes
    setTimeout(() => message.remove(), 10000);
  }
}

document.addEventListener("DOMContentLoaded", afficherAnniversaire);
