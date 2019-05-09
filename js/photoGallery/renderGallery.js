(function() {
  const menu = document.getElementById("sliderMenu");

  function renderGallery(array) {
    array.forEach((obj, i) => {
      const div = document.createElement("div");
      const littleDiv = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      img.src = obj.sources[i];
      img.alt = `${obj.category} photo ${i + 1}`;
      h3.innerText = obj.category;
      littleDiv.appendChild(h3);
      div.appendChild(img);
      div.appendChild(littleDiv);
      menu.appendChild(div);
    });
  }
  quicker().fetchJSON("data/photos.json", renderGallery);
})();
