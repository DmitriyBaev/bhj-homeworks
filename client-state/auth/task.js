'use strict'

const signin = document.getElementById('signin');
signin.classList.add('signin_active');

const signinBtn = document.getElementById('signin__btn');
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];

function toWelcome() {
    const welcome = document.getElementById('welcome');
    signin.classList.remove('signin_active');
    signin.classList.add('signin');

    welcome.classList.remove('welcome');
    welcome.classList.add('welcome_active');

    const userId = document.getElementById('user_id');
    userId.innerText = `${localStorage.userId}`
}

if (localStorage.userId) {
    toWelcome()
}

signinBtn.onclick = (e) => {
    const form = document.getElementById('signin__form')
    const formData = new FormData(form);

    formData.append(login.value, password.value)

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData)

    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.success === true) {
                localStorage.userId = response.user_id;
                toWelcome()

            } else {
                alert('«Неверный логин/пароль»');
                login.value = '';
                password.value = '';
            }
        }
    }

    e.preventDefault()
}

const logoutButton = document.getElementById('logout__btn');

logoutButton.onclick = () => {
    localStorage.clear();

    welcome.classList.remove('welcome_active');
    welcome.classList.add('welcome');

    signin.classList.remove('signin');
    signin.classList.add('signin_active');
    login.value = '';
    password.value = '';
}
