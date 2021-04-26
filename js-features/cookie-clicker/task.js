'use strict'

const image = document.getElementById('cookie');


let dateBeforeClick = 0;

image.onclick = () => {
    
    if (image.width == 200) {
        image.width = 150
    } else {
        image.width = 200
    }

    const click = document.getElementById('clicker__counter');
    click.textContent = +click.textContent + 1;

    const speedOfClick = document.getElementById('speed_of_click');
    
    //console.log(dateBeforeClick +' бифор')
    let dateAfterClick = new Date().getTime();
    const speed = 1 / ((dateAfterClick - dateBeforeClick) / 1000);
    speedOfClick.textContent = speed.toFixed(2);
    dateBeforeClick = dateAfterClick;

    //console.log(dateAfterClick +' афтер');
}