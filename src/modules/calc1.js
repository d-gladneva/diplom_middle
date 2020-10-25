const calc1 = () => {
  const cardsType = document.querySelectorAll('input[name="card-type"]');
  const clubInputs = document.querySelectorAll('input[name="club-name"]');
  const promocodeInput = document.getElementById('promocode');
  const priceTotal = document.getElementById('price-total');
  let clubActive;
  const PROMO = 'ТЕЛО2019';
  const promoSale = 0.3;
  const clubsData = {
    mozaika: 'moz',
    schelkovo: 'shel',
  };
  const calculator = {
    changeClub() {
      clubInputs.forEach((item) => {
        if (item.checked) {
          clubActive = clubsData[item.value];
        }
      });
      this.changePeriod();
    },
    changePeriod() {
      cardsType.forEach((item) =>
          item.checked ? this.setPrice(item.dataset[clubActive]) : ''
      );
    },
    checkPromocode() {
      if (promocodeInput.value === PROMO) {
        return true;
      }
    },
    setPrice(price) {
      this.checkPromocode()
          ? (priceTotal.textContent = Math.ceil(parseInt(price * promoSale)))
          : (priceTotal.textContent = Math.ceil(parseInt(price)));
    },
    init() {
      this.changeClub();
    },
  };

  calculator.init();

  clubInputs.forEach((item) => {
    item.addEventListener('change', () => {
      calculator.changeClub();
    });
  });

  cardsType.forEach((item) => {
    item.addEventListener('change', () => {
      calculator.changePeriod();
    });
  });

  promocodeInput.addEventListener('input', () => {
    calculator.setPrice(priceTotal.textContent);
  });
};

export default calc1;

