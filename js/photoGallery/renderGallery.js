(function() {
    const gallery = document.querySelector('#photoGallery div');

    function renderGallery(array) {
        array.forEach((obj) => {
            obj.sources.forEach((src, i) => {
                const div = document.createElement('div');
                const img = document.createElement('img');
                const a = document.createElement('a');
                a.innerText = obj.category;
                a.href = src; 
                a.target = '_blank';
                img.src = src;
                img.alt = `${obj.category} photo ${i + 1}`;
                div.appendChild(img);
                div.appendChild(a);
                gallery.appendChild(div);
            })
        });
    }
    quicker().fetchJSON('data/photos.json', renderGallery);
}());