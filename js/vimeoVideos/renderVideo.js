(function() {
    const videos = document.getElementById('videos');
    function renderVideo(array) {
        array.forEach((obj) => {
            const iframe = document.createElement('iframe');
            const p = document.createElement('p');
            iframe.src = obj.src;
            iframe.setAttribute('allowfullscreen', '');
            p.innerText = obj.description;
            videos.appendChild(iframe);
            videos.appendChild(p);
        });
    }

    quicker().fetchJSON('data/vimeoVideos.json', renderVideo);
}());