(function() {
    const behindScenesImages = document.getElementById('behindScenesImages');
    function renderBehindScenes(array) {
        array.forEach((obj) => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.style.setProperty('background-image', `url('${obj.src}')`);
            div.title = obj.title;
            li.appendChild(div);
            behindScenesImages.appendChild(li);
        });
    }

    quicker().fetchJSON('data/behindScenes.json', renderBehindScenes);
}());