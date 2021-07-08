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

// Adiciona sombra no header
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    // adiciona se o scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // remove se o scroll for menor que a altura do header
    header.classList.remove("scroll");
  }
});

// Slider Swiper (Carrousel)
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewhell: true,
  keyboard: true,
});

// Scroll Reveal (animações ao fazer scroll)
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duratiom: 700,
  reset: true,
});
// Setando os IDs e classes da página
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contat .links
  `,
  {
    interval: 100,
  }
);
