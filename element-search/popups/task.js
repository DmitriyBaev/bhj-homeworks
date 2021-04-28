"use strict";

const modalMain = document.getElementById("modal_main");
modalMain.className += " modal_active";
console.log(modalMain.className);

const btnDanger = document.getElementsByClassName("btn_danger");
console.log(btnDanger);
btnDanger[0].onclick = () => {
  modalMain.className = "modal";
  console.log(modalMain.className);

  const modalSuccess = document.getElementById("modal_success");
  modalSuccess.className += " modal_active";
  console.log(modalSuccess.className);
};

const modalClose = document.getElementsByClassName("modal__close_times");

const arr = Array.from(modalClose);
arr.forEach((element) => {
  element.onclick = () => {
    element.closest("div.modal").className = "modal";
    console.log(element.closest("div.modal"));
  };
});
