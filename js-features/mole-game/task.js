"use strict";

for (let index = 1; index <= 9; index++) {
  let getHole = (index) => document.getElementById(`hole${index}`);
  console.log(getHole(index));

  getHole(index).onclick = function () {
    const deads = document.getElementById("dead");
    const losts = document.getElementById("lost");

    if (this.className.includes("hole_has-mole")) {
      deads.textContent = +deads.textContent + 1;
      if (deads.textContent == 10) {
        alert("Победа");
        deads.textContent = 0;
        losts.textContent = 0;
      }
    } else {
      losts.textContent = +losts.textContent + 1;
      if (losts.textContent == 5) {
        alert("Вы проиграли");
        deads.textContent = 0;
        losts.textContent = 0;
      }
    }
  }
}
