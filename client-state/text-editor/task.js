'use strict'

const editor = document.getElementById('editor');

editor.addEventListener('keyup', () => {
    editor.value = editor.value.trim();
    localStorage.text = editor.value
})

window.addEventListener('load', () => {
    if (localStorage.text) {
        editor.value = localStorage.text
    }
})

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    editor.value = '';
    //localStorage.clear() Это на случай, если надо и из памяти удалить
})