(function() {
  const menu = document.getElementById('sliderMenu');
  const slider = document.getElementById('slider');
  const prev = document.querySelector('#photoGallery [title~="previous"]');
  const next = document.querySelector('#photoGallery [title~="next"]');
  let galleryArray;
  let galleryIndex = 0;
  let sourceIndex = 0;
  function setHrefOnResize() {
    const anchors = [... menu.querySelectorAll('a')];
    if(window.innerWidth <= 1080) {
      anchors.forEach((a) => {
        a.setAttribute('href', '#slider');
      });
    } else {
      anchors.forEach((a) => {
        a.removeAttribute('href');
      });
    }
  }
  function render(index) {
    return {
      category() {
        sourceIndex = 0;
        render(index).gallery();
      },
      menu(array) {
        galleryArray = array;
        galleryArray.forEach((obj, i) => {
          const a = document.createElement('a');
          const littleDiv = document.createElement('div');
          const img = document.createElement('img');
          const h3 = document.createElement('h3');

          img.src = obj.sources[0];
          img.alt = `${obj.category} photo ${i + 1}`;
          h3.innerText = obj.category;

          a.addEventListener('click', render(i).category);

          littleDiv.appendChild(h3);
          a.appendChild(img);
          a.appendChild(littleDiv);
          menu.appendChild(a);
        });
        setHrefOnResize();
        render(0).gallery();
      },
      gallery() {
        slider.innerHTML = '';
        galleryIndex = index;
        galleryArray[index].sources.forEach((src, i) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = `${galleryArray[index].category} photo ${i + 1}`;
          img.style.display = i === sourceIndex ? 'block' : 'none';
          slider.appendChild(img);
        });
      }
    };
  }
  function move(direction) {
    return {
      gallery() {
        sourceIndex += direction;
        let length = galleryArray[galleryIndex].sources.length - 1;
        if(sourceIndex > length) sourceIndex = 0;
        if(sourceIndex < 0) sourceIndex = length;
        render(galleryIndex).gallery();
      }
    }
  }
  prev.addEventListener('click', move(-1).gallery);
  next.addEventListener('click', move(1).gallery);
  window.addEventListener('resize', setHrefOnResize);
  quicker().fetchJSON('data/photos.json', render().menu);
})();
