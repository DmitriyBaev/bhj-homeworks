"use strict";

const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const chat = document.getElementById("chat-widget__input");
const botMessages = ['До свидания!', 'Напишите завтра', 'Мы сильно заняты, ждите', 'Все в отпуске', 'Нет желания с Вами общаться'];
const viewportHeight = window.innerHeight;
const lastMessage = messages.lastElementChild;

const timer = function setQuestion() {
  const time = new Date();
  let hours = String(time.getHours());
  let minutes = String(time.getMinutes())
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}</div>
    <div class="message__text">
      ${'Скучаешь?'}
    </div>
  </div>
`
if (messages.lastElementChild.getBoundingClientRect().top > viewportHeight) {
      messages.lastElementChild.scrollIntoView({ block: "center", behavior: "smooth" })
    }
}

chatWidget.onclick = () => {
  chatWidget.classList.add("chat-widget_active");

  setInterval(() => {
    setTimeout(timer, 0)
    if (chat.value.trim()) {
      clearTimeout(timer)
    }
    

  }, 3000)

  chat.addEventListener("keyup", (e) => {

    const words = chat.value;
    if (e.code == "Enter" || e.code == "NumpadEnter") {



      function getRandomIntInclusive(min, max) { // MDN в помощь
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      if (words.trim() !== '') {
        const time = new Date();
        let hours = String(time.getHours());
        let minutes = String(time.getMinutes())
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
          messages.lastElementChild.scrollIntoView({ block: "center", behavior: "smooth" })
        }

      }
    }
  });

};

















