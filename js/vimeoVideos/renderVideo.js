const videoIframe = document.getElementById('videoIframe');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');

let videoIndex = 0;
let videoArray = null;

function renderVideo(array) {
    videoArray = array ? array : videoArray;
    const obj = videoArray[videoIndex];
    videoTitle.innerText = obj.title;
    videoDescription.innerText = obj.description;
    videoIframe.src = obj.src;
}

quicker().fetchJSON('data/vimeoVideos.json', renderVideo);