'use strict'

const sendButton = document.getElementById('send');
const form = document.getElementById('form')

sendButton.addEventListener('click', (event) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (e) => {
        const progress = document.getElementById('progress');
        progress.value = `${e.loaded / e.total}`
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(form);

    event.preventDefault()
})


