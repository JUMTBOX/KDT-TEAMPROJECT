const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeIndex++
        if(activeIndex > slidesLength - 1) {
            activeIndex = 0
        }
    } else if(direction === 'down') {
        activeIndex--
        if(activeIndex < 0) {
            activeIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeIndex * sliderHeight}px)`
}
// banner
window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 1474) {
    const elsalvadorSection = document.querySelector(".ds-banner");
    elsalvadorSection.classList.add("animate");
  } else {
    const elsalvadorSection = document.querySelector(".ds-banner");
    elsalvadorSection.classList.remove("animate");
  }

});

//덕수궁 test
const slideContainer = document.querySelector('.slider-container')
const slideR = document.querySelector('.right-slide')
const slideL= document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn= document.querySelector('.down-button')
const slidesL = slideR.querySelectorAll('div').length

let activeSIndex =0 

slideLeft.style.top = `-${(slidesL -1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlider = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if(direction === 'up') {
    activeSIndex++
    if(activeSIndex > slidesL -1 )  {
      activeSIndex = 0
    }
  }
  else if (direction === 'down') {
    activeSIndex--
    if(activeSIndex > 0) {
      activeSIndex = slidesL -1
    }
  }

  slideR.style.transform = `translateY(-${activeSIndex * sliderHeight}px)`
  slideL.style.transform = `translateY(${activeSIndex * sliderHeight}px)`
}

// 창경궁
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo-cursor");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
  captionText.innerHTML = dots[slideIndex-1].alt;
}



 

