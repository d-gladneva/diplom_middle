const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 1.5 rem; color: #fff';

    const removePrompt = (elemWork) => {
        if (elemWork.nextElementSibling && elemWork.nextElementSibling.textContent === 'Заполните поле!') {
            elemWork.nextElementSibling.remove();
        }
    };

    const validForm = (elemWork) => {
        console.log(elemWork);
        const formBtn = document.querySelectorAll('button[type="submit"]');
        console.log(formBtn);

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
                if (elemWork.nextElementSibling && elemWork.nextElementSibling.textContent === 'Ошибка в этом поле') {
                    return;
                }
                elemWork.insertAdjacentElement('afterend', errorDiv);
                offBtn();
            } else {
                if (elemWork.parentNode.lastElementChild.textContent === 'Ошибка в этом поле') {
                    elemWork.parentNode.lastElementChild.remove();
                }
                onBtn();
            }
        }

        if (elemWork.name === 'name') {
            elemWork.value = elemWork.value.replace(/[^а-яё\s]/ig, '');
        }

        if (elemWork.name === 'user_message') {
            elemWork.value = elemWork.value.replace(/[^а-яА-Я ,.?!"';:\-\%()\#]/g, '');
        }
    };



    const sendAllForms = (elemWork, e) => {
        console.dir(elemWork);
        if (elemWork.localName === 'form') {
            const inputFormElems = elemWork.querySelectorAll('input');
            const inputPhone = elemWork.querySelector('input[name="phone"]');
            const inputName = elemWork.querySelector('input[name="name"]');
            const check = elemWork.querySelector('#check');
            const thanks = document.querySelector('#thanks');
            const content = thanks.querySelector('p');
            console.log(content);

            if (inputPhone.value !== '' && inputName.value !== '') {
                if (!check || check && check.checked) {
                    console.log(check.checked);
                    elemWork.appendChild(statusMessage);
                    content.textContent = loadMessage;

                    let target = e.target;
                    console.log(target);

                    const formData = new FormData(elemWork);
                    let body = {};
                    formData.forEach((val, key) => {
                        body[key] = val;
                    });

                    postData(body)
                        .then((response) => {
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
                    console.log(check.checked);
                    const errorDiv = document.createElement('div');
                    errorDiv.textContent = 'Поставьте галочку!';
                    errorDiv.style.cssText = 'color: red; line-height: 0px; height: 15px; font-size: 15px;';
                    if (check.nextElementSibling && check.nextElementSibling.textContent === 'Поставьте галочку!') {
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
                    errorDiv.style.cssText = 'color: red; line-height: 0px; height: 15px; font-size: 15px;';
                    if (inputFormElems[i].nextElementSibling && inputFormElems[i].nextElementSibling.textContent === 'Заполните поле!') {
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
            body: JSON.stringify(body)
        });
    };

    document.body.addEventListener('input', event => {
        event.preventDefault();
        validForm(event.target);
        removePrompt(event.target);
        sendAllForms(event.target);
    });

    document.body.addEventListener('submit', event => {
        event.preventDefault();
        sendAllForms(event.target);
    });


};

export default sendForm;