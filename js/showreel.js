(function() {
    const showreel = document.getElementById('showreel');
    const showreelOut = document.getElementById('showreelOut');
    const showreelIn = document.querySelector('.showreel');
    function show() {
        let v = document.querySelector("video");
        return {
            in() {
                showreel.removeAttribute('hide');
                v.play();
            },
            out() {
                showreel.setAttribute('hide', '');
                v.pause();
            }
        };
    }
    showreelOut.addEventListener('click', show().out);
    showreelIn.addEventListener('click', show().in);
}());