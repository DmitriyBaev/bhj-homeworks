"use strict";

const divsReveal = document.querySelectorAll(".reveal");
const arrayDivsReveal = Array.from(divsReveal);

let isInViewport = function () {
    arrayDivsReveal.forEach((element) => {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < viewportHeight && elementTop > 0) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
};

document.addEventListener("scroll", isInViewport);

