(function() {
  const images = document.getElementById('images');
  const wordsAmount = 4;
  function render() {
    return {
      gallery(array) {
        array.forEach((obj) => {
          const a = document.createElement('a');
          const p = document.createElement('p');
          a.href = obj.src;
          a.target = '_blank';
          a.style.backgroundImage = `url('${obj.src}')`;
          a.setAttribute('data-src', obj.src);
          a.title = obj.description.split(' ').splice(0, wordsAmount).join(' ');
          p.innerText = obj.description;
          images.appendChild(a);
          images.appendChild(p);
        });
      }
    };
  }

  function showImage(e) {
    if (e.target.getAttribute('data-src')) {
      console.log(e.target.style.backgroundImage);
    }
  }
  images.addEventListener('click', showImage);
  quicker().fetchJSON('data/photos.json', render().gallery);
})();
