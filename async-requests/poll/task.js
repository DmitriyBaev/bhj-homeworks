'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        const pollTitle = document.getElementById('poll__title');
        pollTitle.innerHTML = response.data.title;

        const pollAnswers = document.getElementById('poll__answers');
        pollAnswers.innerHTML = ''
        response.data.answers.forEach(element => {
            const pollAnswer = document.createElement('button')
            pollAnswer.classList.add('poll__answer');
            pollAnswer.innerText = `${element}`

            pollAnswers.appendChild(pollAnswer)
        });

        const buttons = document.querySelectorAll('.poll__answer');
        const arrButtons = Array.from(buttons);
        arrButtons.forEach((element, index) => {
            element.onclick = () => {
                alert('Спасибо, ваш голос засчитан!')

                const xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr2.send(`vote=${response.id}&answer=${index}`)

            }
        });

    }


})




