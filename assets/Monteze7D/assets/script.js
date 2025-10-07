// TESTEMONIALS 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
    },
});