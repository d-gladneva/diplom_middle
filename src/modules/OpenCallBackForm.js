const openCallBackForm = () => {
    let f = false;
    const openPopup = document.querySelector('.open-popup');
    const callBackForm = document.getElementById('callback_form');

    document.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        if (!f) {
            if (target.classList.contains('callback-btn')) {
                callBackForm.style.display = 'block';
                f = true;
            }
        }
        if (f) {

            if (target.classList.contains('overlay')) {
                callBackForm.style.display = 'none';
                f = false;
            } else {
                target = target.closest('.close-form');
                if (target.classList.contains('close-form')) {
                    callBackForm.style.display = 'none';
                    f = false;
                }
            }
        }


    });
};

export default openCallBackForm;