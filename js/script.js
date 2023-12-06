$(".venobox").venobox();

$(".review_slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: '<i class="fa-solid fa-angle-left arrow prevArrow"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right arrow nextArrow"></i>',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
