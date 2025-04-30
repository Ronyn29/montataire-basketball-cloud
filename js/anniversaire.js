// 🎉 Script anniversaire TEST avec Léa (30 avril)

function afficherAnniversaire() {
  const anniversaires = [
    { prenom: "Léa", date: "04-30" }, // TEST visible aujourd’hui
    { prenom: "Yanis", date: "05-01" },
  ];

  const today = new Date();
  const moisJour = today.toISOString().slice(5, 10); // "MM-DD"

  const anniversaire = anniversaires.find(p => p.date === moisJour);

  if (anniversaire) {
    const message = document.createElement("div");
    message.className = `
      fixed top-4 left-1/2 transform -translate-x-1/2 
      w-[95%] max-w-md text-center 
      bg-yellow-200 text-black text-sm md:text-base 
      px-4 py-3 rounded-full shadow-lg 
      animate-bounce z-[9999]
    `;
    message.innerHTML = `🎉 Joyeux anniversaire <strong>${anniversaire.prenom}</strong> ! Toute l'équipe du Montataire Basket-ball te souhaite une superbe journée !`;

    document.body.appendChild(message);
    setTimeout(() => message.remove(), 10000);
  }
}

document.addEventListener("DOMContentLoaded", afficherAnniversaire);
