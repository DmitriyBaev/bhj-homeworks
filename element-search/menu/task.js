'use strict'

const menuSub = document.querySelectorAll('.menu__item ul');
console.log(menuSub)
const arrSubMenu = Array.from(menuSub);


arrSubMenu.forEach((element) => {
        const ParentMenuSub = element.closest('li');
        ParentMenuSub.onclick = () => {
        element.className += 'menu_active';
        }
}) 