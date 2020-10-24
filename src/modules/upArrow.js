const arrow = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';
    const upArrow = () => {

        const clubs = document.getElementById('clubs');
        if (clubs.getBoundingClientRect().y <= 0) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }
    };

    window.addEventListener('scroll', upArrow);
};

export default arrow;