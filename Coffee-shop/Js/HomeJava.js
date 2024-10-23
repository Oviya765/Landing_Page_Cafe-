document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.customer-carousel');
    const slides = carousel.querySelectorAll('.customer-carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showNextSlide() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            
            currentSlide = (currentSlide + 1) % totalSlides;
        } else {
          
            currentSlide = (currentSlide + 3) % totalSlides;
        }
        updateSlidesVisibility();
    }

    function updateSlidesVisibility() {
        slides.forEach((slide, index) => {
            if (window.matchMedia('(max-width: 768px)').matches) {

                if (index === currentSlide) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            } else {

                if (index >= currentSlide && index < currentSlide + 3) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            }
        });
    }

    updateSlidesVisibility();


    setInterval(showNextSlide, 5000); 

    window.addEventListener('resize', function () {
        updateSlidesVisibility();
    });
});
