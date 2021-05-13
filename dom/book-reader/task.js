'use strict'

const controlFontSize = document.querySelectorAll('.font-size');
const arrControlFontSize = Array.from(controlFontSize);
const controlColor = document.querySelectorAll('.color');
const arrControlColor = Array.from(controlColor);
const controlBackground = document.querySelectorAll('.book__control_background .color');
const arrControlBackground = Array.from(controlBackground);
const book = document.getElementById('book');
let previousActiveElement, index;

arrControlFontSize.forEach((element, index) => {
    element.onclick = (e) => {

        previousActiveElement = document.querySelector('.font-size_active');
        previousActiveElement.classList.remove('font-size_active');
        book.classList.remove(`book_fs-${previousActiveElement.dataset.size}`);

        arrControlFontSize[index].classList.add('font-size_active');
        book.classList.add(`book_fs-${element.dataset.size}`); 

        e.preventDefault() 
    }
})

arrControlColor.forEach((element, index) => {
    element.onclick = (e) => {

        previousActiveElement = document.querySelector('.color_active');
        previousActiveElement.classList.remove('color_active');
        book.classList.remove(`book_color-${previousActiveElement.dataset.textColor}`);

        arrControlColor[index].classList.add('color_active');
        book.classList.add(`book_color-${element.dataset.textColor}`); 

        e.preventDefault() 
    }
})

arrControlBackground.forEach((element, index) => {
    element.onclick = (e) => {

        previousActiveElement = document.querySelector('.book__control_background .color_active');
        previousActiveElement.classList.remove('color_active');
        book.classList.remove(`bg_color_${previousActiveElement.dataset.bgColor}`);

        arrControlBackground[index].classList.add('color_active');
        book.classList.add(`bg_color_${element.dataset.bgColor}`); 

        e.preventDefault() 
    }
})



