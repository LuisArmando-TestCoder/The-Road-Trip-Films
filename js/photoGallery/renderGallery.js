(function() {
  const menu = document.getElementById('sliderMenu');
  const slider = document.getElementById('slider');
  const prev = document.querySelector('#photoGallery [title~="previous"]');
  const next = document.querySelector('#photoGallery [title~="next"]');
  let galleryArray;
  let galleryIndex = 0;
  let sourceIndex = 0;
  function render(index) {
    return {
      category() {
        sourceIndex = 0;
        render(index).gallery();
      },
      menu(array) {
        galleryArray = array;
        galleryArray.forEach((obj, i) => {
          const div = document.createElement('div');
          const littleDiv = document.createElement('div');
          const img = document.createElement('img');
          const h3 = document.createElement('h3');
          
          img.src = obj.sources[0];
          img.alt = `${obj.category} photo ${i + 1}`;
          h3.innerText = obj.category;

          div.addEventListener('click', render(i).category);

          littleDiv.appendChild(h3);
          div.appendChild(img);
          div.appendChild(littleDiv);
          menu.appendChild(div);
        });
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
  quicker().fetchJSON('data/photos.json', render().menu);
})();
