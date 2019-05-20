(function() {
  const images = document.getElementById('images');
  const wordsAmount = 4;
  function render() {
    return {
      gallery(array) {
        array.forEach((obj) => {
          const div = document.createElement('div');
          const p = document.createElement('p');
          div.style.backgroundImage = `url('${obj.src}')`;
          div.setAttribute('data-src', obj.src);
          div.title = obj.description.split(' ').splice(0, wordsAmount).join(' ');
          p.innerText = obj.description;
          images.appendChild(div);
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
