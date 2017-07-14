(function() {
  var raf = window.requestAnimationFrame

  var carousel = document.querySelector('#makeup .carousel')
  carousel.main = carousel.querySelector('#makeup .carousel .main')
  carousel.slider = document.querySelector('#makeup .carousel-cont .slider')
  carousel.backBtn = document.querySelector('#makeup .carousel-cont button.back')
  carousel.nextBtn = document.querySelector('#makeup .carousel-cont button.next')
  carousel.slideIndex = 0;

  carousel.main.slides = Array.from(carousel.main.getElementsByTagName('li'))
  carousel.slider.slides = Array.from(carousel.slider.getElementsByTagName('li'))

  var scrollTo
  var scrollFrame
  var slideSlider = function(target) {
    scrollTo = Math.min(
      document.querySelector(
        '.slider li[data-index="'+target+'"]'
      ).offsetLeft,
      carousel.slider.scrollWidth - carousel.slider.getBoundingClientRect().width
    )

    TweenMax.to(carousel.slider, 0.33, {
      scrollTo: {x: scrollTo}
    })
  }

  carousel.slider.addEventListener('touchstart', function() {
    window.cancelAnimationFrame(scrollFrame)
  })

  var shiftCarousel = function(target) {
    slideSlider(target)
    carousel.slideIndex = target
    carousel.main.style.transform = 'translate(-' + (target * 100) + '%, 0)';
  }

  carousel.backBtn.addEventListener('click', function() {
    if (carousel.slideIndex === 0) {
      return shiftCarousel(carousel.main.slides.length - 1)
    }
    shiftCarousel(carousel.slideIndex - 1)
  })

  carousel.nextBtn.addEventListener('click', function() {
    if (carousel.slideIndex === carousel.main.slides.length - 1) {
      return shiftCarousel(0)
    }
    return shiftCarousel(carousel.slideIndex + 1)
  })

  carousel.slider.slides.forEach(function(slide, index) {
    slide.setAttribute('data-index', index)
    slide.addEventListener('click', function() {
      var target = window.parseInt(slide.getAttribute('data-index'))
      shiftCarousel(target)
    })
  })

  shiftCarousel(carousel.slideIndex)


  // parallax
  var scroller = new ScrollMagic.Controller()
  var llaxes = Array.from(document.querySelectorAll('.llax'))

  llaxes.forEach(function(llax) {
    new ScrollMagic.Scene({
      triggerElement: llax,
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(TweenMax.from(llax, 1, {
      yPercent: 12,
    }))
    .addTo(scroller)
  })

})()
