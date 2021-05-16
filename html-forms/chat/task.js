"use strict";

const chatWidget = document.querySelector(".chat-widget");
const time = new Date();
let hours = String(time.getHours());
let minutes = String(time.getMinutes())
const messages = document.querySelector(".chat-widget__messages");
const chat = document.getElementById("chat-widget__input");
const botMessages = ['До свидания!', 'Напишите завтра', 'Мы сильно заняты, ждите', 'Все в отпуске', 'Нет желания с Вами общаться'];
const viewportHeight = window.innerHeight;
const lastMessage = messages.lastElementChild;

chatWidget.onclick = () => {
  chatWidget.classList.add("chat-widget_active");
  setTimeout(setQuestion, 30000);
};


function setQuestion() {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}</div>
    <div class="message__text">
      ${'Скучаешь?'}
    </div>
  </div>
`
}

//chat.setAttribute("required", "") Почему не срабатывает?
//chat.setAttribute('minlength', 1);



chat.addEventListener("keyup", (e) => {
  if (e.code == "Enter" || e.code == "NumpadEnter") {
    const words = chat.value;


    function getRandomIntInclusive(min, max) { // MDN в помощь
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (words.trim() !== '') {
      messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}</div>
    <div class="message__text">
      ${words}
    </div>
  </div>
`;

      chat.value = '';

      messages.innerHTML += `
  <div class="message">
    <div class="message__time">${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}</div>
    <div class="message__text">
      ${botMessages[getRandomIntInclusive(0, botMessages.length - 1)]}
    </div>
  </div>
`;

      if (messages.lastElementChild.getBoundingClientRect().top > viewportHeight) {
        scroll(0, 1000)
      }
      console.log(messages.lastElementChild.getBoundingClientRect().top)
    }
  }
});

if(!chat.addEventListener("keyup", () => {
  
})) {
  setTimeout(setQuestion, 30000)
}







