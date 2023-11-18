const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const cardWidth = document.querySelector('.card').offsetWidth + 20; // Ancho de la tarjeta + margen

nextBtn.addEventListener('click', () => {
  counter = Math.min(counter + 1, carousel.children.length - Math.floor(carousel.offsetWidth / cardWidth));
  carousel.style.transform = `translateX(-${counter * cardWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  counter = Math.max(counter - 1, 0);
  carousel.style.transform = `translateX(-${counter * cardWidth}px)`;
});
