const burger = () => {
    const menuButton = document.querySelector('.menu-button');
    const menuBtn = menuButton.querySelector('img');
    const closeMenuButton = document.querySelector('.close-menu-btn');
    const closeMenuBtn = closeMenuButton.querySelector('img');
    const openBurger = document.querySelector('.popup-menu');

    if (document.documentElement.clientWidth < 768) {
        menuBtn.addEventListener('click', () => {
            openBurger.style.display = 'block';
        });
        closeMenuBtn.addEventListener('click', () => {
            openBurger.style.display = 'none';
        });

    }
};

export default burger;