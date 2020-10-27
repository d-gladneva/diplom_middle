const sliderGallery = () => {
    let slideIndex = 0;
    const nextBtn = document.querySelector('.gallery-slider .next');
    const prevBtn = document.querySelector('.gallery-slider .prev');
    const slider = document.querySelector('.gallery-slider');
    const slides = slider.querySelectorAll('.slide');

    let dots = slider.querySelectorAll('.gallery-slider__dots-item');

    const gallerySlider = {
        showSlides(n) {
            let i;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' active', '');
            }
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].className += ' active';
        },
        nextSlide() {
            this.showSlides((slideIndex += 1));
        },
        prevSlide() {
            this.showSlides((slideIndex -= 1));
        },
        currentSlide(n) {
            this.showSlides((slideIndex = n));
        },
        init() {
            this.showSlides(slideIndex);
            this.autoPlay();
        },
        autoPlay() {
            setInterval(() => {
                this.nextSlide();
            }, 2000);
        },
    };
    gallerySlider.init(slideIndex);

    nextBtn.addEventListener('click', () => {
        gallerySlider.nextSlide();
    });
    prevBtn.addEventListener('click', () => {
        gallerySlider.prevSlide();
    });
    dots.forEach((item, i) => {
        item.addEventListener('click', () => {
            gallerySlider.currentSlide(i + 1);
        });
    });

    //   const gallerySlider = document.querySelector('.gallery-slider');
    //   const slide = gallerySlider.querySelectorAll('.slide');

    //   let currentSlide = 0;

    //   const autoPlaySlide = () => {
    //     slide[currentSlide].style.display = 'none';
    //     currentSlide++;
    //     if (currentSlide >= slide.length) {
    //       currentSlide = 0;
    //     }
    //     slide[currentSlide].style.display = 'block';
    //   };

    //   const startSlide = () => {
    //     setInterval(autoPlaySlide, 2000);
    //   };

    //   const stoptSlide = () => {};

    //   startSlide();
};

export default sliderGallery;
