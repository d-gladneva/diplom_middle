const calc = () => {
    const calculator = (e) => {
        // let target = e.target;
        let price = 3000;
        // console.log(target);
        const cardLetoMozaika = document.querySelector('#card_leto_mozaika');
        const priceTotal = document.querySelector('#price-total');
        const cardLetoSchelkovo = document.querySelector('#card_leto_schelkovo');
        const promo = document.querySelector('input[placeholder="Промокод"]');
        console.log(promo);

        if (cardLetoMozaika.checked) {
            console.log(promo);
            if (promo.value) {
                priceTotal.textContent = 3;
            } else
                priceTotal.textContent = price;
        }
        if (cardLetoSchelkovo.checked) {
            priceTotal.textContent = 3005;
        }
    };
    calculator()

};

export default calc;