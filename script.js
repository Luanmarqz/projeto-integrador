const profileButton = document.getElementById("pag_inicial-profileButton");
const dropdownMenu = document.getElementById("pag_inicial-dropdownMenu");
const profileContainer = document.getElementById(
  "pag_inicial-profileContainer"
);

profileButton.addEventListener("click", function (e) {
  dropdownMenu.classList.toggle("show");
  e.stopPropagation();
});

// Fecha o dropdown ao clicar fora do container
document.addEventListener("click", function (e) {
  if (!profileContainer.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});
