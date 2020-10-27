const openFreeVisitForm = () => {
    let f = false;
    const openPopup = document.querySelector('.open-popup');
    const freeVisitForm = document.getElementById('free_visit_form');

    document.addEventListener('click', (e) => {
        let target = e.target;
        // console.log(target);
        if (!f) {
            if (target) {
                if (target.classList.contains('open-popup')) {
                    freeVisitForm.style.display = 'block';
                    f = true;
                }
            }
        } else if (f) {
            if (target.classList.contains('overlay')) {
                freeVisitForm.style.display = 'none';
                f = false;
            } else {
                target = target.closest('.close-form');
                if (target&&target.classList.contains('close-form')) {
                    freeVisitForm.style.display = 'none';
                    f = false;
                }
            }
        }
    });
};

export default openFreeVisitForm;
