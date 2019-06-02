(function() {
    function renderVideo(array) {
        array.forEach((obj) => {
            const destiny = document.querySelector(obj.destiny);
            const video = document.createElement('video');
            const vidWrap = document.createElement('div');
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const i = document.createElement('i');
            video.crossOrigin = 'anonymous';
            video.src = obj.src;
            h3.innerText = obj.description;
            i.innerText = obj.date;
            vidWrap.className = 'video';
            vidWrap.appendChild(video);
            destiny.appendChild(vidWrap);
            destiny.appendChild(div);
            div.appendChild(h3);
            div.appendChild(i);
        });
    }

    M.s('videos', renderVideo);
    M.s('videos', customControls);

    quicker().fetchJSON('data/vimeoVideos.json', M.p('videos').t);
}());