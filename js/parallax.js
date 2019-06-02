(function () {
    const items = document.querySelectorAll('[parallax]');

    function parallaxItems(e) {
        [...items].forEach((item) => {
            const pos = item.getBoundingClientRect().toJSON();
            if (pos.bottom > 0) {
                item.style.top = `${pos.bottom / item.getAttribute('parallax')}px`;
            }
        });
    }
    parallaxItems();
    window.addEventListener('scroll', parallaxItems);
}());