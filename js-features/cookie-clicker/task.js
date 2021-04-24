'use strict'

const image = document.getElementById('cookie');

let secAfterClick =0;
let secBeforeClick = secAfterClick;

image.onclick = () => {
    
    if (image.width == 200) {
        image.width = 150
    } else {
        image.width = 200
    }

    const click = document.getElementById('clicker__counter');
    click.textContent = +click.textContent + 1 ;

    const speedOfClick = document.getElementById('speed_of_click');

    
    let dateAfterClick = new Date();
    secAfterClick = dateAfterClick.getMilliseconds() / 1000;

    const speed = 1 / (secAfterClick - secBeforeClick);

    console.log(dateAfterClick);
    console.log(secAfterClick);
    console.log(secBeforeClick);

    speedOfClick.textContent = speed.toFixed(2)
}