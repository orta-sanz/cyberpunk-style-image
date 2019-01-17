(function() {
  let elements = document.getElementsByClassName('future-image-cover')

  Array.prototype.forEach.call(elements, (el, i) => {
    const bgIMage = el.dataset.img

    if(bgIMage) {
      el.style.backgroundImage = `url(${bgIMage})`
      // Create 4 <span> inside the image div
      for (let i = 0; i <= 4; i++) {
        let span = document.createElement('span')
        el.appendChild(span)
      }
    }
  })
})()
