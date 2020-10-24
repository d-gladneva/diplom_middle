const openThanks = () => {
    const thanks = document.querySelector('#thanks');
    let f = false;

    const closeForm = document.querySelector('.close-form');

    document.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        if (!f) {
            if (target){
                if (target.classList.contains('btn-send')) {
                    thanks.style.display = 'block';
                    f = true;
                }
            }

        } else if (f){

            if (target.classList.contains('overlay') || target.classList.contains('close-btn')) {
                thanks.style.display = 'none';
                f = false;
            } else {
                target = target.closest('.close-form');
                if (target.classList.contains('close-form')) {
                    thanks.style.display = 'none';
                    f = false;
                }
            }
        }
    });
};

export default openThanks;




