import openMenu from './modules/openMenu';
// import maskPhone from './modules/maskPhone';
import openFreeVisitForm from './modules/openFreeVisitForm';
import openCallBackForm from './modules/OpenCallBackForm';
import openGift from './modules/gift';
import sendForm from './modules/sendForm';
import burger from './modules/burgerMenu';
import arrow from './modules/upArrow';
import calc1 from './modules/calc1';
// import openThanks from './modules/openThanks';
import slider from './modules/slider';
import sliderServices from './modules/uslugiCarusel';
import sliderGallery from './modules/gallerySlider';
if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
);

// maskPhone();
openMenu();
openFreeVisitForm();
openCallBackForm();
openGift();
// sendForm();
burger();
arrow();
// openThanks();
slider();
sliderServices();
sliderGallery();
// calc1();
