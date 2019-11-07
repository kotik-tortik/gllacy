'use strict';

var modalWindow = document.querySelector('.modal-window');
var openModalButton = document.querySelector('.information-block__button');
var closeModalButton = modalWindow.querySelector('.modal-window__cross-icon');
var overlay = modalWindow.querySelector('.modal-window__overlay');
var modalNameInput = modalWindow.querySelector('.name-input');

var sliderButtons = document.querySelectorAll('.slider-navigation__item');
var slides = document.querySelectorAll('.slider__item');
var body = document.querySelector('body');
/*
var firstSliderButton = document.getElementById('firstSliderButton');
var secondSliderButton = document.getElementById('secondSliderButton');
var thirdSliderButton = document.getElementById('thirdSliderButton');

var firstSlide = document.querySelector('.slider__item--first');
var secondSlide = document.querySelector('.slider__item--second');
var thirdSlide = document.querySelector('.slider__item--third');
*/

openModalButton.addEventListener('click', function (e) {
  modalWindow.classList.add('modal-show');
  modalNameInput.focus();
});

closeModalButton.addEventListener('click', function (e) {
  modalWindow.classList.remove('modal-show');
});

overlay.addEventListener('click', function (e) {
  modalWindow.classList.remove('modal-show');
});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (modalWindow.classList.contains('modal-show')) {
    modalWindow.classList.remove('modal-show');
    }
  }
});

var changeBodyColor = function (number) {
  switch (number) {
    case 0:
      body.style.backgroundColor = '#849d8f';
      break;
    case 1:
      body.style.backgroundColor = '#8996a6';
      break;
    case 2:
      body.style.backgroundColor = '#9d8b84';
      break;
  }
};

for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener('click', function (e) {
    for (let j=0;j<sliderButtons.length;j++) {
      sliderButtons[j].classList.remove('active-slider-navigation-item');
      slides[j].classList.remove('slider-show');
    }
    sliderButtons[i].classList.add('active-slider-navigation-item');
    slides[i].classList.add('slider-show');
    changeBodyColor(i);
  });
}

/*
sliderButtons[0].addEventListener ('click', function () {
    if (!firstSliderButton.classList.contains('active-slider-navigation-item')) {
      firstSliderButton.classList.add('active-slider-navigation-item');
      body.style.backgroundColor = '#849d8f';
      if (secondSliderButton.classList.contains('active-slider-navigation-item')) {
        secondSliderButton.classList.remove('active-slider-navigation-item');
      }
      if (thirdSliderButton.classList.contains('active-slider-navigation-item')) {
        thirdSliderButton.classList.remove('active-slider-navigation-item');
      }
      if (!firstSlide.classList.contains('slider-show')) {
        firstSlide.classList.add('slider-show');
        if (secondSlide.classList.contains('slider-show')) {
          secondSlide.classList.remove('slider-show');
        }
        if (thirdSlide.classList.contains("slider-show")) {
          thirdSlide.classList.remove('slider-show');
        }
      }
    }
});

sliderButtons[1].addEventListener ('click', function (e) {
    if (!secondSliderButton.classList.contains('active-slider-navigation-item')) {
      secondSliderButton.classList.add('active-slider-navigation-item');
      body.style.backgroundColor = '#8996a6';
      if (firstSliderButton.classList.contains('active-slider-navigation-item')) {
        firstSliderButton.classList.remove('active-slider-navigation-item');
      }
      if (thirdSliderButton.classList.contains('active-slider-navigation-item')) {
        thirdSliderButton.classList.remove('active-slider-navigation-item');
      }
      if (!secondSlide.classList.contains('slider-show')) {
        secondSlide.classList.add('slider-show');
        if (firstSlide.classList.contains('slider-show')) {
          firstSlide.classList.remove('slider-show');
        }
        if (thirdSlide.classList.contains("slider-show")) {
          thirdSlide.classList.remove('slider-show');
        }
      }
    }
});

sliderButtons[2].addEventListener ('click', function (e) {
  if (!thirdSliderButton.classList.contains('active-slider-navigation-item')) {
    thirdSliderButton.classList.add('active-slider-navigation-item');
    body.style.backgroundColor = '#9d8b84';
    if (firstSliderButton.classList.contains('active-slider-navigation-item')) {
      firstSliderButton.classList.remove('active-slider-navigation-item');
    }
    if (secondSliderButton.classList.contains('active-slider-navigation-item')) {
      secondSliderButton.classList.remove('active-slider-navigation-item');
    }
    if (!thirdSlide.classList.contains('slider-show')) {
      thirdSlide.classList.add('slider-show');
      if (firstSlide.classList.contains('slider-show')) {
        firstSlide.classList.remove('slider-show');
      }
      if (secondSlide.classList.contains("slider-show")) {
        secondSlide.classList.remove('slider-show');
      }
    }
  }
});
*/