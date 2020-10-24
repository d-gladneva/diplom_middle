const arrow = () => {
    const upArrow = () => {
        const totop = document.getElementById('totop');
        const clubs = document.getElementById('clubs');

        if (clubs.getBoundingClientRect().y <= 0) {
            totop.style.opacity = '1';
        } else totop.style.opacity = '0';
    };

    window.addEventListener('scroll', upArrow);
};

export default arrow;