'use strict'

const signin = document.getElementById('signin');
signin.classList.add('signin_active');

const signinBtn = document.getElementById('signin__btn');
signinBtn.onclick = () => {
    const formData = new FormData();
    const login = document.getElementsByName('login')[0];
    const password = document.getElementsByName('password')[0];
    
    formData.append(login.value, password.value)

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData)

}