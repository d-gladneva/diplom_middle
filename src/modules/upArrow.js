const upArrow = () => {
    const totop = document.getElementById('totop');
    const clubs = document.getElementById('clubs');

    console.log(clubs.getBoundingClientRect().y);

    console.log(window.pageYOffset);
    if (clubs.getBoundingClientRect().y <= 0){
        totop.style.opacity = '1';
    } else totop.style.opacity = '0';
};

export default upArrow;