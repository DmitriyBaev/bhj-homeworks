const rightButton = document.querySelector(".slider__arrow_next");
const leftButton = document.querySelector(".slider__arrow_prev");
const sliders = document.getElementsByClassName("slider__item");
const arrSliders = Array.from(sliders);
const dots = document.getElementsByClassName("slider__dot");
const arrDots = Array.from(dots);

function changedImgRight() {
  arrSliders[i].className = "slider__item";
  i < arrSliders.length - 1
    ? (arrSliders[i + 1].className += " slider__item_active")
    : ((i = -1), (arrSliders[i + 1].className += " slider__item_active"));

  i += 1;

  activeDot();
}

function changedImgLeft() {
  arrSliders[i].className = "slider__item";
  i > 0
    ? (arrSliders[i - 1].className += " slider__item_active")
    : ((i = arrSliders.length),
      (arrSliders[i - 1].className += " slider__item_active"));

  i -= 1;

  activeDot();
}

function activeDot() {
  const index = arrSliders.findIndex((element) =>
    element.className.includes("slider__item_active")
  );
  console.log(index);
  arrDots.forEach((elem) => {
    elem.className = "slider__dot";
  });
  arrDots[index].className += " slider__dot_active";
}

arrDots.forEach((elem) => {
  elem.onclick = () => {
    const index = arrDots.indexOf(elem);
    arrSliders[index].className += " slider__item_active";
  };
});

let i = 0;
rightButton.onclick = changedImgRight;
leftButton.onclick = changedImgLeft;
