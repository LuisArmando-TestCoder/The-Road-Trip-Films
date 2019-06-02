function eqVideo(vid, cnv) {
    const c = cnv;
    let video = vid;
    const ctx = c.getContext('2d');
    let linesReductor = 200;
    let audio;
    let sky;
    let analyzer;
    let range = {};

    function btnPressed(e) {
        if (!analyzer) {
            analyzer = quicker().analyseAudio(audio);
            frame();
        }
    }

    function updateLines(e) {
        linesReductor = e ? e.target.value : linesReductor;
        range.value = linesReductor;
    }

    function presetColor(n) {
        ctx.beginPath();
        ctx.fillStyle = `rgb(255,255,255)`;
    }

    function sizeCanvas(w, h) {
        c.width = w && h ? w : window.innerWidth;
        c.height = h && w ? h : window.innerHeight;
    }

    function createLines(array, color) {
        return {
            y(config, flip) {
                array.forEach((num, i) => { // think about i for the gap
                    presetColor(num);
                    const size = num * config.scale;
                    const distribution = flip ? i * (c.height / array.length) : -(i * (c.height / array.length)) + c.height;
                    ctx.fillRect(c.width / 2 - size / 2, distribution, size, config.thickness);
                });
            },
            x(config, flip) {
                array.forEach((num, i) => {
                    presetColor(num);
                    const size = num * config.scale;
                    const distribution = flip ? i * (c.width / array.length) : -(i * (c.width / array.length)) + c.width;
                    ctx.fillRect(distribution, c.height / 2 - size / 2, config.thickness, size);
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
        const a = Array.from(analyzer.getAmplitude().array);
        const freqs = f.splice(0, f.length / linesReductor);
        const amps = a.splice(0, a.length / linesReductor);
        const averAmp = analyzer.getAmplitude().average;
        createLines(freqs, '#fff').x({
            scale: audio.volume / 10,
            thickness: 1
        });
        // audio.volume / 10 = 0.1 -> good scale in 50x50 canvas
        // with high freqs (0.2 is better with lower freqs) 
        // if audio.volume is lower -> scale is lower
        requestAnimationFrame(frame);
    }

    audio = video;

    sizeCanvas(50, 50);
    updateLines();
    video.addEventListener('click', btnPressed);
}