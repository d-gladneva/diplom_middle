const calc = () => {
    const formCardOrder = document.querySelector('#card_order');
    const cardOrderBtn = document.querySelector('.card-order-btn');
    const calculator = (elem) => {

        // let target = e.target;
        // console.log(target);
        const cardLetoMozaika = document.querySelector('#card_leto_mozaika');
        const priceTotal = document.querySelector('#price-total');
        const cardLetoSchelkovo = document.querySelector('#card_leto_schelkovo');
        const promo = document.querySelector('input[placeholder="Промокод"]');

        const price = 1000;
        let currentPrice = price;
        let cardsType = document.querySelectorAll('input[name="card-type"]');
        console.log(cardsType);
        cardsType.forEach(item => {
            item.addEventListener('change', el => {
                console.log(el.value);

                currentPrice = price * el.value;
                if (promo.value){
                    currentPrice = price * el.value * 0.3;
                }
                priceTotal.textContent = currentPrice;
            });
        });


        // console.log(promo);
        //
        // if (cardLetoMozaika.checked) {
        //     console.log(1);
        //     if (promo.value) {
        //         console.log(promo.value);
        //         priceTotal.textContent = 3;
        //     }
        //     priceTotal.textContent = 3000;
        // } else  {
        //     cardLetoMozaika.checked = false;
        //     cardLetoSchelkovo.checked = true;
        //     console.log(5);
        //     if (promo.value) {
        //         priceTotal.textContent = 3;
        //     }
        //     priceTotal.textContent = price;
    };
    calculator();

    formCardOrder.addEventListener('input', calculator);

    cardOrderBtn.addEventListener('submit', calculator);


};

export default calc;