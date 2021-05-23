'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const items = document.getElementById('items');
        let data = JSON.parse(xhr.responseText);

        for (let key in data.response.Valute) {
            const item = document.createElement('div');
            item.classList.add('item')
            let value = data.response.Valute[key]

            item.innerHTML = (`
        <div class="item__code">
        ${value.CharCode}
    </div>
    <div class="item__value">
    ${value.Value}
    </div>
    <div class="item__currency">
        руб.
    </div>`)
            items.appendChild(item)
        };

        const loader = document.querySelector('#loader');
        loader.classList.remove('loader_active')
    }
})
