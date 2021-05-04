"use strict";

const rightButton = document.querySelector(".slider__arrow_next");
const leftButton = document.querySelector(".slider__arrow_prev");
const sliders = document.getElementsByClassName("slider__item");
const arrSliders = Array.from(sliders);
const dots = document.getElementsByClassName("slider__dot");
const arrDots = Array.from(dots);

// function changedImgRight() {
//   arrSliders[i].className = "slider__item";
//   i < arrSliders.length - 1
//     ? (arrSliders[i + 1].className += " slider__item_active")
//     : ((i = -1), (arrSliders[i + 1].className += " slider__item_active"));

//   i += 1;

//   activeDot();
// }

// function changedImgLeft() {
//   arrSliders[i].className = "slider__item";
//   i > 0
//     ? (arrSliders[i - 1].className += " slider__item_active")
//     : ((i = arrSliders.length),
//       (arrSliders[i - 1].className += " slider__item_active"));

//   i -= 1;

//   activeDot();
// }

// function activeDot() {
//   const index = arrSliders.findIndex((element) =>
//     element.className.includes("slider__item_active")
//   );
//   console.log(index);
//   arrDots.forEach((elem) => {
//     elem.className = "slider__dot";
//   });
//   arrDots[index].className += " slider__dot_active";
// }

// arrDots.forEach((elem) => {
//   elem.onclick = () => {
//     const index = arrDots.indexOf(elem);
//     arrSliders[index].className += " slider__item_active";
//   };
// });

// let i = 0;
// rightButton.onclick = changedImgRight;
// leftButton.onclick = changedImgLeft;

let index = arrSliders.findIndex((element) =>
  element.className.includes("slider__item_active")
);

function activeSlideDot(index) {
  arrSliders[index].className += " slider__item_active";
  arrDots[index].className += " slider__dot_active";
}

function changedImgRight() {
  arrSliders[index].className = "slider__item";
  arrDots[index].className = "slider__dot";
  index < arrSliders.length - 1 ? (index += 1) : (index = 0);

  activeSlideDot(index);
}

function changedImgLeft() {
  arrSliders[index].className = "slider__item";
  arrDots[index].className = "slider__dot";
  index > 0 ? (index -= 1) : (index = arrSliders.length - 1);

  activeSlideDot(index);
}

if (
  arrDots.findIndex((elem) => {
    elem.onclick;
    return elem;
  })
) {
  index = arrDots.indexOf(elem);
  activeSlideDot(index);
}

// arrDots.forEach((elem) => {
//     elem.onclick = () => {

//       index = arrDots.indexOf(elem);
//       activeSlideDot(index)
//     };
//   });

rightButton.onclick = changedImgRight;
leftButton.onclick = changedImgLeft;
