// Abre e fecha o menu
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// Fecha o menu ao clicar nele
const links = document.querySelectorAll("nav ul li a");
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}
