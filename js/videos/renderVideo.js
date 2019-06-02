(function() {
    const videos = document.getElementById('videos');
    function renderVideo(array) {
        array.forEach((obj) => {
            const video = document.createElement('video');
            const vidWrap = document.createElement('div');
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const i = document.createElement('i');
            video.src = obj.src;
            // video.setAttribute('controls', '');
            h3.innerText = obj.description;
            i.innerText = obj.date;
            vidWrap.className = 'video';
            vidWrap.appendChild(video);
            videos.appendChild(vidWrap);
            videos.appendChild(div);
            div.appendChild(h3);
            div.appendChild(i);
        });
    }

    M.s('videos', renderVideo);
    M.s('videos', customControls);

    quicker().fetchJSON('data/vimeoVideos.json', M.p('videos').t);
}());