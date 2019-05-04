(function() {
    const menuBtn = document.getElementById('menu');

    function checkNavLocalStorage(e) {
        localStorage.setItem('navOpen', menuBtn.checked);
    }

    function changeCheckedNav(e) {
        menuBtn.checked = JSON.parse(localStorage.getItem('navOpen'));
    }
    
    changeCheckedNav();
    menuBtn.addEventListener('change', checkNavLocalStorage);
}());