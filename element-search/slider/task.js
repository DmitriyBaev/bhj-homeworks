const rightButton = document.querySelector(".slider__arrow_next");
console.log(rightButton);
const leftButton = document.querySelector(".slider__arrow_prev");
console.log(leftButton);
const sliders = document.getElementsByClassName("slider__item");
console.log(sliders);
const arrSliders = Array.from(sliders);
console.log(arrSliders);

rightButton.onklick = () => {
  
  for (let i = 0; i <= arrSliders.length; i++) {
    if (i < arrSliders.length) {
      arrSliders[i].className = slider__item;
      arrSliders[i + 1].className += slider__item_active;
    }
    if (i == arrSliders.length) {
      arrSliders[i].className = slider__item;
      arrSliders[0].className += slider__item_active;
    }
  }
}

leftButton.onklick = () => {
  for (let i = arrSliders.length; i == 0; i--) {
    arrSliders[arrSliders.length].className = slider__item;
    arrSliders[arrSliders.length - 1].className += slider__item_active;
  }
};
