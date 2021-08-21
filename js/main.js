$(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 700,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./img/svg/arrow-right.svg" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./img/svg/arrow-left.svg" alt="arrow"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false
            }
          }
        ]
      });
});