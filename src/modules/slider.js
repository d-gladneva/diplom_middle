const slider = () => {

    const mainSlider = document.querySelector('.main-slider');
    const slide = mainSlider.querySelectorAll('.slide');


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

export default slider;