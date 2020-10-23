const burger = () => {
    const menuButton = document.querySelector('.menu-button');
    const closeMenuLi = document.querySelector('.scroll');
    console.log(closeMenuLi);
    const closeMenuHref = closeMenuLi.querySelector('a');
    console.log(closeMenuHref);
    const topMenu = document.querySelector('.top-menu');
    const closeMenuButton = document.querySelector('.close-menu-btn');
    const closeMenuBtn = closeMenuButton.querySelector('img');
    const openBurger = document.querySelector('.popup-menu');
    let f = false;
    if (document.documentElement.clientWidth < 768) {
        console.log(topMenu);
        topMenu.style.position = 'fixed';
        document.addEventListener('click', (e) => {
            let target = e.target;
            console.log(target);
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


    // menuBtn.addEventListener('click', () => {
    //     openBurger.style.display = 'block';
    // });
    // closeMenuBtn.addEventListener('click', () => {
    //     openBurger.style.display = 'none';
    // });

};

export default burger;