(function() {
    const videoIframe = document.getElementById('videoIframe');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const prev = document.querySelector('.arrowsWrapper button');
    const next = document.querySelectorAll('.arrowsWrapper button')[1];

    let videoIndex = 0;
    let videoArray = null;

    function renderVideo(array) {
        videoArray = array ? array : videoArray;
        const obj = videoArray[videoIndex];
        videoTitle.innerText = obj.title;
        videoDescription.innerText = obj.description;
        videoIframe.src = obj.src;
    }

    function show() {
        return {
            prev() {
                videoIndex--;
                if (videoIndex < 0) videoIndex = videoArray.length - 1;
                videoIframe.setAttribute('data-arrow-clicked', 'prev');
                renderVideo();
            },
            next() {
                videoIndex++;
                if (videoIndex > videoArray.length - 1) videoIndex = 0;
                videoIframe.setAttribute('data-arrow-clicked', 'next');
                renderVideo();
            }
        }
    }

    quicker().fetchJSON('data/vimeoVideos.json', renderVideo);

    prev.addEventListener('click', show().prev);
    next.addEventListener('click', show().next);
}());