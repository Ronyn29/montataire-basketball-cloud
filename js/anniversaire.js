
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/licencies_anniversaires.json")
    .then(response => response.json())
    .then(data => {
      const today = new Date();
      const todayStr = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}`;

      const anniversaires = data.filter(licencie => {
        const [year, month, day] = licencie.dateNaissance.split("-");
        const anniversaireStr = `${day}-${month}`;
        return anniversaireStr === todayStr;
      });

      if (anniversaires.length > 0) {
        const prenoms = anniversaires.map(l => l.prenom.split(" ")[0]).join(", ");
        const message = `🎉 Bon anniversaire à ${prenoms} ! 🎂`;

        const banner = document.createElement("div");
        banner.className = "fixed top-0 left-0 w-full bg-yellow-300 text-black text-center font-semibold py-4 z-50 shadow-md animate-slide-in";
        banner.textContent = message;

        document.body.appendChild(banner);

        setTimeout(() => {
          banner.remove();
        }, 10000);
      }
    })
    .catch(error => console.error("Erreur lors du chargement des anniversaires :", error));
});
