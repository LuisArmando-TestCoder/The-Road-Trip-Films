(function() {
    const showreel = document.getElementById('showreel');
    const showreelOut = document.getElementById('showreelOut');
    const showreelIn = document.querySelector('.showreel');
    function show() {
        return {
            in() {
                showreel.removeAttribute('hide');
            },
            out() {
                let v = showreel.querySelector("video");
                showreel.setAttribute('hide', '');
                v.pause();
            }
        };
    }
    showreelOut.addEventListener('click', show().out);
    showreelIn.addEventListener('click', show().in);
}());