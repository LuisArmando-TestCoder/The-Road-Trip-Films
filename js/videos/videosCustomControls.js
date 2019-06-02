const customControls = function () {
    const videosWrap = document.querySelectorAll('.video');

    function renderControls(wrapper) {
        const video = wrapper.querySelector('video');
        const timeline = document.createElement('div');
        const current = document.createElement('span');
        const equalizer = document.createElement('canvas');
        const cursor = document.createElement('i');
        let cursorIMG = ['play'];

        cursor.className = 'cursor fas fa-play-circle'; // or fa-pause
        timeline.className = 'timeline';
        current.className = 'current';
        equalizer.className = 'equalizer';

        timeline.appendChild(current);
        wrapper.appendChild(timeline);
        wrapper.appendChild(equalizer);
        wrapper.appendChild(cursor);

        eqVideo(video, equalizer);

        video.addEventListener('click', control(cursor, cursorIMG).video);
        video.addEventListener('timeupdate', move(current).current);
        video.addEventListener('mousemove', move(cursor).cursor);
        video.addEventListener('mouseout', () => {
            cursor.style.transform = 'scale(1)';
        });

    }

    function control(cursor, img) {
        return {
            video(e) {
                const video = e.target;
                if (video.paused){
                    video.play();
                    img[0] = 'pause';
                    cursor.className = 'cursor fas fa-pause-circle';
                } else {
                    video.pause();
                    img[0] = 'play';
                    cursor.className = 'cursor fas fa-play-circle';
                }
                video.style.cursor = `url(img/svg/${img[0]}.svg), pointer`;
            }
        }
    }

    function move(elem) {
        return {
            current(e) {
                const video = e.target;
                elem.style.width = `${video.currentTime / video.duration * 100}%`;
            },
            cursor() {
                elem.style.transform = 'scale(0)';
            }
        }
    }

    [...videosWrap].forEach((videoWrap) => {
        renderControls(videoWrap);
    });
}