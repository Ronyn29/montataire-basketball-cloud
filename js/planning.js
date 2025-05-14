
document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#planning-table tbody");

  try {
    const response = await fetch("data/planning.json");
    const data = await response.json();

    data.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="border px-4 py-2 text-center">${entry.categorie}</td>
        <td class="border px-4 py-2 text-center">${entry.jours}</td>
        <td class="border px-4 py-2 text-center">${entry.heures}</td>
        <td class="border px-4 py-2 text-center">${entry.lieu}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Erreur lors du chargement du planning :", error);
    tableBody.innerHTML = "<tr><td colspan='4' class='text-center text-red-600 py-4'>Erreur de chargement du planning.</td></tr>";
  }
});
