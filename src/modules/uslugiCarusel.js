const sliderServices = () => {

    const servicesSlider = document.querySelector('.services-slider');
    const slide = servicesSlider.querySelectorAll('.slide');

    let currentSlide = 0;

    const autoPlaySlide = () => {
        slide[currentSlide].style.display='none';
        currentSlide++;
        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        slide[currentSlide].style.display='block';
    };

    const startSlide = () => {
        setInterval(autoPlaySlide, 2000);
    };

    const stoptSlide = () => {

    };

    startSlide();

};

export default sliderServices;