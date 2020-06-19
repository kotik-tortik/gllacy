'use strict';

const modalWindow = document.querySelector('.modal-window');
const openModalButton = document.querySelector('.information-block__button');
const closeModalButton = modalWindow.querySelector('.modal-window__cross-icon');
const overlay = modalWindow.querySelector('.modal-window__overlay');
const modalNameInput = modalWindow.querySelector('.name-input');
const sliderButtons = document.querySelectorAll('.slider-navigation__item');
const slides = document.querySelectorAll('.slider__item');
const body = document.querySelector('body');
const ESC_BUTTON_KEY_CODE = 27;

openModalButton.addEventListener('click', (e) => {
  modalWindow.classList.add('modal-show');
  modalNameInput.focus();

  closeModalButton.addEventListener('click', closeModalWindowAndRemoveListeners);
  overlay.addEventListener('click', closeModalWindowAndRemoveListeners);
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === ESC_BUTTON_KEY_CODE) {
      e.preventDefault();
      closeModalWindowAndRemoveListeners();
    }
  });
});

sliderButtons.forEach((item, index) => {
  item.onclick = () => {
    deleteShovingClass();
    changeBodyColor(index);
    item.classList.add('active-slider-navigation-item');
    slides[index].classList.add('slider-show');
  };
});

function closeModalWindowAndRemoveListeners() {
  if (modalWindow.classList.contains('modal-show')) {
    modalWindow.classList.remove('modal-show');
  }

  closeModalButton.removeEventListener('click');
  overlay.removeEventListener('click');
  window.removeEventListener('keydown');
}

function deleteShovingClass() {
  sliderButtons.forEach(item => {
    if (item.classList.contains('active-slider-navigation-item')) {
      item.classList.remove('active-slider-navigation-item');
    }
  });

  slides.forEach(item => {
    if (item.classList.contains('slider-show')) {
      item.classList.remove('slider-show');
    }
  });
}

function changeBodyColor(index) {
  switch (index) {
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