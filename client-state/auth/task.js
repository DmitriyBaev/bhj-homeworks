'use strict'

const signin = document.getElementById('signin');
signin.classList.add('signin_active');

const signinBtn = document.getElementById('signin__btn');
signinBtn.onclick = (e) => {
    const form = document.getElementById('signin__form')
    const formData = new FormData(form);
    const login = document.getElementsByName('login')[0];
    const password = document.getElementsByName('password')[0];

    formData.append(login.value, password.value)

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData)

    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.success === true) {
                signin.classList.remove('signin_active');
                localStorage.userId = response.user_id;

                const welcome = document.getElementById('welcome');
                welcome.classList.add('welcome_active');

                const userId = document.getElementById('user_id');
                userId.innerText = `${localStorage.userId}`

                const logoutButton = document.createElement('button');
                logoutButton.classList.add('btn')
                logoutButton.innerText = 'Выйти'
                const body = document.getElementsByTagName('body')[0]
                body.appendChild(logoutButton)

                logoutButton.onclick = () => {
                    localStorage.clear()
                    window.location.reload()
                }
            } else {
                alert('«Неверный логин/пароль»');
                login.value = '';
                password.value = '';
            }
        }
    }

    e.preventDefault()
}