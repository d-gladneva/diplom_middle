const burger = () => {
    const menuButton = document.querySelector('.menu-button');
    const closeMenuLi = document.querySelector('.scroll');
    const closeMenuHref = closeMenuLi.querySelector('a');
    const topMenu = document.querySelector('.top-menu');
    const closeMenuButton = document.querySelector('.close-menu-btn');
    const closeMenuBtn = closeMenuButton.querySelector('img');
    const openBurger = document.querySelector('.popup-menu');
    let f = false;
    if (document.documentElement.clientWidth < 768) {

        document.addEventListener('click', (e) => {
            topMenu.style.position = 'fixed';
            let target = e.target;
            if (!f) {
                target = target.closest('.menu-button');
                if (target) {
                    openBurger.style.display = 'block';
                    f = true;
                }
            } else if (f) {
                if (target === closeMenuBtn) {
                    openBurger.style.display = 'none';
                    f = false;
                } else {
                    if (target.classList.contains('test')) {
                        openBurger.style.display = 'none';
                        f = false;
                    }
                }
            }
        });
    }
};

export default burger;