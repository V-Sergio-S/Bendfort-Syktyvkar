import Swiper from 'swiper/bundle';


const benefitsSwiper = new Swiper('.swiper--benefits', {
    centeredSlides: true,
    effect: "coverflow",
    speed: 2000,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    },
});

const commentsSwiper = new Swiper(".swiper--comments", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".comments__arrow--next",
        prevEl: ".comments__arrow--prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.95": {
            slidesPerView: 1,
        },
        "@1.25": {
            slidesPerView: 2,
        },
        "@1.75": {
            slidesPerView: 3,
        },
    },
});


const ourTeachersSwiper = new Swiper(".swiper--teachers", {
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
        nextEl: ".teachers__arrow--next",
        prevEl: ".teachers__arrow--prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.95": {
            slidesPerView: 1,
        },
        "@1.25": {
            slidesPerView: 2,
        },
        "@1.75": {
            slidesPerView: 3,
        },
        "@1.95": {
            slidesPerView: 4,
        },
    },
});