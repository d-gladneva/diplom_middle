const calc = () => {
    const formCardOrder = document.querySelector('#card_order');
    const cardOrderBtn = document.querySelector('.card-order-btn');
    const promo = document.querySelector('input[placeholder="Промокод"]');
    const calculator = (elem) => {
        const cardLetoMozaika = document.querySelector('#card_leto_mozaika');
        const priceTotal = document.querySelector('#price-total');
        const cardLetoSchelkovo = document.querySelector('#card_leto_schelkovo');


        let cardsType = document.querySelectorAll('input[name="card-type"]');
        console.log(cardsType);
        if (cardLetoMozaika.checked){
            const price = 1000;
            let currentPrice = price;
            console.log(1);
            cardsType.forEach(item => {
                item.addEventListener('change', el => {
                    console.log(el);
                    console.log(el.target.value);
                    currentPrice = price * el.target.value;
                    if (promo.value){
                        currentPrice = price * el.target.value * 0.3;
                    }
                    priceTotal.textContent = currentPrice;
                });
            });
            cardsType.forEach(item => {
                item.addEventListener('input', el => {
                    console.log(el);
                    console.log(el.target.value);
                    currentPrice = price * el.target.value;
                    if (promo.value){
                        currentPrice = price * el.target.value * 0.3;
                    }
                    priceTotal.textContent = currentPrice;
                });
            });
        } else {
            const price = 2000;
            let currentPrice = price;
            console.log(2);
            cardLetoMozaika.checked = false;
            cardLetoSchelkovo.checked = true;
            cardsType.forEach(item => {
                item.addEventListener('change', el => {
                    console.log(el);
                    console.log(el.value);
                    currentPrice = price * el.target.value;
                    if (promo.value){
                        currentPrice = price * el.target.value * 0.5;
                    }
                    priceTotal.textContent = currentPrice;
                });
            });
            cardsType.forEach(item => {
                item.addEventListener('input', el => {
                    console.log(el);
                    console.log(el.value);
                    currentPrice = price * el.target.value;
                    if (promo.value){
                        currentPrice = price * el.target.value * 0.5;
                    }
                    priceTotal.textContent = currentPrice;
                });
            });
        }
    };
    calculator();
    formCardOrder.addEventListener('input', calculator);
    promo.addEventListener('input', calculator);
    cardOrderBtn.addEventListener('submit', calculator);
};
export default calc;