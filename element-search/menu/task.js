"use strict";

const menuSub = document.querySelectorAll(".menu__item ul");
const arrSubMenu = Array.from(menuSub);

arrSubMenu.forEach((element) => {
  const ParentMenuSub = element.closest("li");
  const elementLink = ParentMenuSub.getElementsByTagName("a").item(0);

  elementLink.onclick = () => {
    if (element.className.includes(" menu_active")) {
      element.className = "menu menu_sub";
    } else {
      arrSubMenu.forEach((elem) => {
        elem.className = "menu menu_sub";
      });
      element.className += " menu_active";
    }
    return false;
  };
});

const menuSub1 = document.querySelectorAll(".menu__item1 ul");
const arrSubMenu1 = Array.from(menuSub1);

arrSubMenu1.forEach((element) => {
  const ParentMenuSub1 = element.closest("li");
  const elementLink1 = ParentMenuSub1.getElementsByTagName("a").item(0);

  elementLink1.onclick = () => {
    if (element.className.includes(" menu_active")) {
      element.className = "menu1 menu_sub1";
    } else {
      arrSubMenu1.forEach((elem) => {
        elem.className = "menu1 menu_sub1";
      });
      element.className += " menu_active";
    }
    return false;
  };
});
