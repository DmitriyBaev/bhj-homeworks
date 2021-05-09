'use strict'

const bookControls = document.querySelectorAll('.font-size');
const arrBookControls = Array.from(bookControls);
const book = document.getElementById('book');
let exIndex, index;

arrBookControls.forEach((element, index) => {
    element.onclick = () => changeFontSize(index)
})

    function changeFontSize (index) {
        
        exIndex = arrBookControls.findIndex((elem) => {
            elem.classList.contains('font-size_active')
        })
            arrBookControls[exIndex].classList.remove('font-size_active')
            book.classList.remove(`book_fs-${arrBookControls[exIndex].dataset.size}`)

            arrBookControls[index].classList.add('font-size_active');
            book.classList.add(`book_fs-${arrBookControls[index].dataset.size}`) 
            //console.log(`book_fs-${arrBookControls[index].dataset.size}`)
        
    }
