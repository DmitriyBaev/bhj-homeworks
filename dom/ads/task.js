"use strict";

const rotators = document.querySelectorAll(".rotator__case");
const arrayRotators = Array.from(rotators);
let exIndex,
  index,
  speed;

function changeSlogan() {
  exIndex = arrayRotators.findIndex((elem) =>
    elem.classList.contains("rotator__case_active")
  );
  arrayRotators[exIndex].classList.remove("rotator__case_active");

  index = exIndex + 1;
  if (index == arrayRotators.length) {
    index = 0;
  }
  arrayRotators[index].classList.add("rotator__case_active");

  arrayRotators[index].style.color = arrayRotators[index].dataset.color;
  speed = arrayRotators[index].dataset.speed;
  console.log(speed)

  setTimeout(changeSlogan, speed)
}

changeSlogan()