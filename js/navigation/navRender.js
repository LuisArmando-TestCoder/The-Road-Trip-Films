(function() {
    const globalNav = document.querySelector('.menu__list');
    function renderGlobalNav(array) {
        array.forEach((obj) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = obj.title;
            a.href = obj.href;
            a.className = 'item__anchor';
            li.className = 'list__item';
            li.appendChild(a);
            globalNav.appendChild(li);
        });
    }
    quicker().fetchJSON('data/globalNav.json', renderGlobalNav);    
}());
