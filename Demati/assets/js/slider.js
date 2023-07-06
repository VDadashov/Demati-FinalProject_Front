//#region FirstSection-Slide
let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 1;

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

let repeat = function (activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  let repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  }
  repeater();
}
repeat();
//#endregion

//#region blog-slider
$(document).ready(function(){
    $('.blog-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
      variableWidth: true,
    });
  });
//#endregion

//#region featured-products=>slider
$(document).ready(function(){
    $('.featured-products-list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2500,
      variableWidth: true,
      centerMode: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
      variableWidth: true,
    });
  });
//#endregion
