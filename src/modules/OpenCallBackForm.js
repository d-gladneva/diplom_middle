const openCallBackForm = () => {
    let f = false;
    const callBackForm = document.getElementById('callback_form');

    document.addEventListener('click', (e) => {
        let target = e.target;
        // console.log(target);
        if (!f) {
            if (target) {
                if (target.classList.contains('callback-btn')) {
                    callBackForm.style.display = 'block';
                    f = true;
                }
            }
        } else if (f) {
            if (
                target.classList.contains('overlay') ||
                target.classList.contains('close-btn')
            ) {
                callBackForm.style.display = 'none';
                f = false;
            } else {
                target = target.closest('.close-form');
                if (target&&target.classList.contains('close-form')) {
                    callBackForm.style.display = 'none';
                    f = false;
                }
            }
        }
    });
};

export default openCallBackForm;
