"use strict";

let countdown = () => {
  const timer = document.getElementById("timer");
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе!");
  }
};

setInterval(countdown, 100);

let finalCountdown = () => {
  const hour = document.getElementById("hour");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  sec.textContent -= 1;
// if (sec.textContent < 10) {
//     sec.textContent = 0 + sec.textContent
// }

// if (min.textContent < 10) {
//     min.textContent = `0${min.textContent}`
// }

// if (hour.textContent < 10) {
//     hour.textContent = `0${hour.textContent}`
// }

  if (sec.textContent == 0) {
    min.textContent -= 1;
    sec.textContent = 60;
  }

  if (min.textContent == 0) {
    hour.textContent -= 1;
    min.textContent = 59;
  }

  if (hour.textContent < 0) {
    alert("Вы победили в конкурсе!");
    location.assign("http://www.mozilla.org")
  }
};

setInterval(finalCountdown, 10);
