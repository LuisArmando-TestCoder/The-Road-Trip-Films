(function() {
    const menuBtn = document.getElementById('menu');
    const content = document.getElementById('content');

    function checkNavLocalStorage(e) {
        localStorage.setItem('navOpen', menuBtn.checked);
        blurContent();
    }

    function blurContent() {
        if(menuBtn.checked) {
            content.style.filter = 'blur(10px)';
        } else {
            content.style.filter = '';
        }
    }

    function hideShowNav() {
        if(menuBtn.checked)  menuBtn.checked = false;
        blurContent();
    }

    function changeCheckedNav(e) {
        menuBtn.checked = JSON.parse(localStorage.getItem('navOpen'));
        blurContent();
    }
    
    // changeCheckedNav();
    menuBtn.addEventListener('change', checkNavLocalStorage);
    content.addEventListener('click', hideShowNav);
}());