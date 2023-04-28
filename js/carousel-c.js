window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list-c'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        scrollLock: true,
        dots: '.carousel__indicator-c',
        arrows: {
            prev: '.carousel__previous-c',
            next: '.carousel__next-c'
        },
        responsive: [
            {
              // screens greater than >= 720px
              breakpoint: 720,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
});