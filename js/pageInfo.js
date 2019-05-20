(function () {
    const paragraphs = [...document.querySelectorAll('article p')];

    function spanify(elem, interval = 10) {
        const str = elem.innerText;
        elem.innerHTML =
            str.split('').map((l, i) =>
                `<span style="animation-delay:${i / interval}s">${l}</span>`)
            .join('');
    }

    quicker().setClassShowHide({
        selector: 'article',
        showState: 'mostradles'
    });

    paragraphs.forEach((p, i) => {
        spanify(p, 100);
        p.parentElement.id = `n${i}`;
    });
}());