if (window.innerWidth < 768) {
new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicMainBullets: 5,
    },
    grabCursor: true,

    mousewheel: {
        sensitivity:1,
    },
    slidesPerView: 1.15,
    spaceBetween: 20,
}); 
}

const swiperButtonOpen = document.querySelector('.swiper-button-open');
const swiper = document.querySelector('.swiper-wrapper');
const swiperButtonClose = document.querySelector('.swiper-button-close');

swiperButtonOpen.addEventListener('click', function () {
    swiper.style.height = 100 + '%';
    swiperButtonOpen.style.display = 'none';
    swiperButtonClose.style.display = 'inline-block';
    swiperButtonClose.style.width = 105 + 'px';
});

swiperButtonClose.addEventListener('click', function() {
    swiper.style.height = 165 + 'px';
    swiperButtonOpen.style.display = 'inline-block';
    swiperButtonClose.style.display = 'none';
});