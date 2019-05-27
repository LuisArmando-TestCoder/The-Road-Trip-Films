(function() {
    const videos = document.getElementById('videos');
    function renderVideo(array) {
        array.forEach((obj) => {
            const iframe = document.createElement('iframe');
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const i = document.createElement('i');
            iframe.src = obj.src;
            iframe.setAttribute('allowfullscreen', '');
            h3.innerText = obj.description;
            i.innerText = obj.date;
            videos.appendChild(iframe);
            videos.appendChild(div);
            div.appendChild(h3);
            div.appendChild(i);
        });
    }

    quicker().fetchJSON('data/vimeoVideos.json', renderVideo);
}());