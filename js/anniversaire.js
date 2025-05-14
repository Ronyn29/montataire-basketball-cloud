document.addEventListener("DOMContentLoaded", () => {
  const test = document.createElement("div");
  test.className = "fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-[9999]";
  document.body.appendChild(test);
});