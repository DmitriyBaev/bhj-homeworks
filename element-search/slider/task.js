"use strict";

const rightButton = document.querySelector(".slider__arrow_next");
const leftButton = document.querySelector(".slider__arrow_prev");
const sliders = document.getElementsByClassName("slider__item");
const arrSliders = Array.from(sliders);
const dots = document.getElementsByClassName("slider__dot");
const arrDots = Array.from(dots);
let index, exIndex;

function activeSlideDot(index) {
  exIndex = arrSliders.findIndex((element) =>
    element.className.includes("slider__item_active")
  );
  arrSliders[exIndex].className = "slider__item";
  arrDots[exIndex].className = "slider__dot";

  arrSliders[index].className += " slider__item_active";
  arrDots[index].className += " slider__dot_active";
}

function changedImgRight() {
  index = arrSliders.findIndex((element) =>
    element.className.includes("slider__item_active")
  );
  index < arrSliders.length - 1 ? (index += 1) : (index = 0);

  activeSlideDot(index);
}

function changedImgLeft() {
  index = arrSliders.findIndex((element) =>
    element.className.includes("slider__item_active")
  );
  index > 0 ? (index -= 1) : (index = arrSliders.length - 1);
  
  activeSlideDot(index);
}

arrDots.forEach((elem, index) => (elem.onclick = () => activeSlideDot(index)));

rightButton.onclick = changedImgRight;
leftButton.onclick = changedImgLeft;
