'use strict'
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    const progress = document.getElementById('progress');
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        xhr.upload.onprogress = () => {

            progress.value = xhr.upload.onprogress
        }
    }
})

