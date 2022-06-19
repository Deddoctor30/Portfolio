const slider = (target) => {
   $(target).slick({
      dots: true,
      // autoplay: true,
      // adaptiveHeight: true,
      // centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: "unslick"
        }
      ]
    });
}
export default slider;