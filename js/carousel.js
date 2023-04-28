window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: true,
        scrollLock: true,
        dots: '.carousel__indicator',
        arrows: {
            prev: '.carousel__previous',
            next: '.carousel__next'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
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
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
});