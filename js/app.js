(function() {
  var carousel = document.querySelector('#makeup .carousel')
  carousel.main = carousel.querySelector('#makeup .carousel .main')
  carousel.slider = document.querySelector('#makeup .carousel-cont .slider')
  carousel.backBtn = document.querySelector('#makeup .carousel-cont button.back')
  carousel.nextBtn = document.querySelector('#makeup .carousel-cont button.next')
  carousel.slideIndex = 0;

  carousel.main.slides = Array.from(carousel.main.getElementsByTagName('li'))
  carousel.slider.slides = Array.from(carousel.slider.getElementsByTagName('li'))

  var shiftCarousel = function(target) {
    carousel.slideIndex = target
    carousel.main.style.transform = 'translate(-' + (target * 100) + '%, 0)';
  }

  carousel.backBtn.addEventListener('click', function() {
    if (carousel.slideIndex === 0) {
      return
    }
    shiftCarousel(carousel.slideIndex - 1)
  })

  carousel.nextBtn.addEventListener('click', function() {
    if (carousel.slideIndex === carousel.main.slides.length - 1) {
      return
    }
    shiftCarousel(carousel.slideIndex + 1)
  })

  carousel.slider.slides.forEach(function(slide, index) {
    slide.setAttribute('data-index', index)
    slide.addEventListener('click', function() {
      var target = window.parseInt(slide.getAttribute('data-index'))
      shiftCarousel(target)
    })
  })

})()
