(function() {
    const items = document.querySelectorAll('[parallax]');

    function parallaxItems() {
        [... items].forEach((item) => {
            item.style.top = `-${window.scrollY / parseInt(item.getAttribute('parallax') * 2)}px`;
        });
    }

    window.addEventListener('scroll', parallaxItems);
}());