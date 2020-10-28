const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 1.5 rem; color: #fff';

    const thanks = document.querySelector('#thanks');
    let f = false;

    // const closeForm = document.querySelector('.close-form');
    const openPopupThanks = () => {
        thanks.style.display = 'block';
        f = true;
    };
    const closePopupThanks = () => {
        document.addEventListener('click', (e) => {
            let target = e.target;
            if (f) {
                if (
                    target.classList.contains('overlay') ||
                    target.classList.contains('close-btn')
                ) {
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
    const removePrompt = (elemWork) => {
        if (
            elemWork.nextElementSibling &&
            elemWork.nextElementSibling.textContent === 'Заполните поле!'
        ) {
            elemWork.nextElementSibling.remove();
        }
    };

    const validForm = (elemWork) => {
        const formBtn = document.querySelectorAll('button[type="submit"]');

        const onBtn = () => {
            formBtn.forEach((item) => {
                item.removeAttribute('disabled');
            });
        };

        const offBtn = () => {
            formBtn.forEach((item) => {
                item.setAttribute('disabled', true);
            });
        };

        const checkPhone = /^(\+7)?8?([-()]*\d){10}$/;

        if (elemWork.name === 'phone') {
            elemWork.value = elemWork.value.replace(/^\++/g, '+');
            elemWork.value = elemWork.value.replace(/[^+0-9]/g, '');
            let valid = checkPhone.test(elemWork.value);
            if (!valid) {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = 'Ошибка в этом поле';
                errorDiv.style.cssText =
                    'color: red; line-height: 0px; height: 15px; font-size: 15px;'
                if (
                    elemWork.nextElementSibling &&
                    elemWork.nextElementSibling.textContent === 'Ошибка в этом поле'
                ) {
                    return;
                }
                elemWork.insertAdjacentElement('afterend', errorDiv);
                offBtn();
            } else {
                if (
                    elemWork.parentNode.lastElementChild.textContent ===
                    'Ошибка в этом поле'
                ) {
                    elemWork.parentNode.lastElementChild.remove();
                }
                onBtn();
            }
        }

        if (elemWork.id === 'promocode') {
            elemWork.value = elemWork.value.replace(/[^+0-9а-яА-Яa-zA-z]/g, '');
        }

        if (elemWork.name === 'name' && elemWork.id !== 'promocode') {
            elemWork.value = elemWork.value.replace(/[^а-яё\s]/gi, '');
        }

        if (elemWork.name === 'user_message') {
            elemWork.value = elemWork.value.replace(
                /[^а-яА-Я ,.?!"';:\-\%()\#]/g,
                ''
            );
        }
    };

    const sendAllForms = (elemWork) => {
         {
            const inputFormElems = elemWork.querySelectorAll('input');
            const inputPhone = elemWork.querySelector('input[name="phone"]');
            const inputName = elemWork.querySelector('input[name="name"]');
            const check = elemWork.querySelector('#check');
            const content = thanks.querySelector('p');

            if (inputPhone.value !== '' || inputPhone.value !== '' && inputName && inputName.value !== '') {
                if (!check || (check && check.checked)) {
                    elemWork.appendChild(statusMessage);
                    content.textContent = loadMessage;

                    const formData = new FormData(elemWork);
                    let body = {};
                    formData.forEach((val, key) => {
                        body[key] = val;
                    });

                    postData(body)
                        .then((response) => {
                            openPopupThanks();
                            if (response.ok !== true) {
                                throw new Error('status network not 200');
                            }
                            content.textContent = succesMessage;
                            if (check) {
                                check.checked = false;
                            }
                            for (let i = 0; i < inputFormElems.length; i++) {
                                inputFormElems[i].value = '';
                            }

                            setTimeout(() => {
                                statusMessage.remove();
                            }, 5000);
                        })
                        .catch((error) => {
                            content.textContent = errorMessage;
                            console.log(error);
                        });
                } else if (check && check.checked === false) {
                    console.log('error');
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Поставьте галочку!';
                    errorDiv.style.cssText =
                        'color: red; line-height: 0px; height: 15px; font-size: 15px;';
                    if (
                        check.nextElementSibling &&
                        check.nextElementSibling.textContent === 'Поставьте галочку!'
                    ) {
                        return;
                    }
                    if (check.checked === false) {
                        check.insertAdjacentElement('afterend', errorDiv);
                    }
                }
            } else {
                for (let i = 0; i < inputFormElems.length; i++) {
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Заполните поле!';
                    errorDiv.style.cssText =
                        'color: red; line-height: 0px; height: 15px; font-size: 15px;';
                    if (
                        inputFormElems[i].nextElementSibling &&
                        inputFormElems[i].nextElementSibling.textContent ===
                        'Заполните поле!'
                    ) {
                        return;
                    }
                    if (inputFormElems[i].value === '') {
                        inputFormElems[i].insertAdjacentElement('afterend', errorDiv);
                    }
                }
            }
            document.body.addEventListener('input', removePrompt);
        }
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    };

    document.body.addEventListener('input', (event) => {
        event.preventDefault();
        validForm(event.target);
        removePrompt(event.target);
    });

    document.body.addEventListener('submit', (event) => {
        event.preventDefault();
        sendAllForms(event.target);
    });
    closePopupThanks();
};

export default sendForm;
