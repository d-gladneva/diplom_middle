const openGift = () => {
    let f = false;
    const gift = document.getElementById('gift');
    const fixedGift = document.querySelector('.fixed-gift');

    document.addEventListener('click', (e) => {
        let target = e.target;

        console.log(target);
        if (!f) {
            target = target.closest('.fixed-gift');
            if (target.classList.contains('fixed-gift')) {

                gift.style.display = 'block';
                console.log(fixedGift);
                fixedGift.style.zIndex = 'auto';
                f = true;
            }
        }
        if (f){

            if (target.classList.contains('overlay')) {
                fixedGift.style.zIndex = '5555';
                gift.style.display = 'none';
                f = false;
            } else {
                target = target.closest('.close-form');
                if (target.classList.contains('close-form')) {
                    fixedGift.style.zIndex = '5555';
                    gift.style.display = 'none';
                    f = false;
                }
            }
        }


    });
};

export default openGift;