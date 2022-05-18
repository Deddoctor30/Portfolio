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
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
}

export default slider;