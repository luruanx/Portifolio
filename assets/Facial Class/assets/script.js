// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },
});

//Section GRADE Aula
const faqContainers = document.querySelectorAll('.faq-container');

faqContainers.forEach((faqContainer) => {
  const faqInputs = faqContainer.querySelectorAll('.faq-item input');

  // Alternar as perguntas dentro do mesmo bloco
  faqInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        faqInputs.forEach((otherInput) => {
          if (otherInput !== input) {
            otherInput.checked = false;
          }
        });
      }
    });
  });

  // Fechar perguntas ao clicar fora do bloco específico
  document.addEventListener('click', function (e) {
    if (!faqContainer.contains(e.target)) {
      faqInputs.forEach((input) => {
        input.checked = false;
      });
    }
  });
});
