function eqVideo(vid, cnv) {
    const c = cnv;
    let video = vid;
    const ctx = c.getContext('2d');
    let linesReduction = 200;
    let audio;
    let analyzer;
    let range = {};

    function btnPressed(e) {
        if (!analyzer) {
            analyzer = quicker().analyseAudio(audio);
            frame();
        }
    }

    function updateLines(e) {
        linesReduction = e ? e.target.value : linesReduction;
        range.value = linesReduction;
    }

    function presetColor(n) {
        ctx.beginPath();
        ctx.fillStyle = n;
    }

    function sizeCanvas(w, h) {
        c.width = w && h ? w : window.innerWidth;
        c.height = h && w ? h : window.innerHeight;
    }

    function createLines(array, color) {
        presetColor(color);
        return {
            y(config, flip) {
                config.sum = config.sum ? config.sum : 0;
                array.forEach((num, i) => { // think about i for the gap
                    const size = num * config.scale;
                    const distribution = flip ? i * (c.height / array.length) : -(i * (c.height / array.length)) + c.height;
                    const x = c.width / 2 - size / 2;
                    const y = distribution - config.thickness + config.sum;
                    ctx.fillRect(x, y, audio.volume ? size : config.stretch, config.thickness);
                });
            },
            x(config, flip) {
                config.sum = config.sum ? config.sum : 0;
                array.forEach((num, i) => {
                    const size = num * config.scale;
                    const distribution = flip ? i * (c.width / array.length) : -(i * (c.width / array.length)) + c.width;
                    const x = distribution - config.thickness + config.sum;
                    const y = c.height / 2 - size / 2;
                    ctx.fillRect(x, y, config.thickness, audio.volume ? size : config.stretch);
                });
            }
        }
    }

    function clear() {
        ctx.clearRect(0, 0, c.width, c.height);
    }

    function frame() {
        clear();
        const f = Array.from(analyzer.getFrequency().array);
        const freqs = f.splice(0, f.length / linesReduction);
        createLines(freqs, '#fff').x({
            scale: audio.volume / 10,
            thickness: audio.volume ? 1 : 20,
            sum: audio.volume ? -4.5 : 0,
            stretch: 1
        });
        // audio.volume / 10 = 0.1 -> good scale in 50x50 canvas
        // with high freqs (0.2 is better with lower freqs) 
        // if audio.volume is lower -> scale is lower
        requestAnimationFrame(frame);
    }

    function toggleVolume() {
        audio.volume = audio.volume ? 0 : 1;
    }

    audio = video;

    sizeCanvas(50, 50);
    updateLines();

    cnv.addEventListener('click', toggleVolume)
    video.addEventListener('click', btnPressed);
}