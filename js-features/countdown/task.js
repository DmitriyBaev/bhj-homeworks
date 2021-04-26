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
if (sec.textContent < 10) {
    sec.textContent = sec.textContent.padStart(2, '0')
}

if (min.textContent < 10) {
    min.textContent = min.textContent.padStart(2, '0')
}

if (hour.textContent < 10) {
    hour.textContent = hour.textContent.padStart(2, '0')
}

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

setInterval(finalCountdown, 100);
