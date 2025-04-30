document.addEventListener("DOMContentLoaded", () => {
  const message = document.createElement("div");
  message.className = "fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-300 text-black px-6 py-3 rounded-full shadow z-[9999]";
  message.textContent = "✅ Test JS OK – visible partout";

  document.body.appendChild(message);
});
