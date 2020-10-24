const openMenu = () => {
    let f = false;
    const clubsList = document.querySelector('.clubs-list');
    const menuList = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => {
        if (!f) {
            menuList.style.display = 'block';
            f = true;
        } else {
            menuList.style.display = 'none';
            f = false;
        }
    });
};

export default openMenu;
