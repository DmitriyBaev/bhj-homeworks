'use strict'

const tooltips = document.querySelectorAll('.has-tooltip');
const arrTooltips = Array.from(tooltips);

arrTooltips.forEach(element => {
    element.onclick = (e) => {
        e.preventDefault();

        let elemTooltip = document.querySelector('.tooltip');
        if (element.getAttribute('title') == elemTooltip.innerText) {
            elemTooltip.classList.toggle('tooltip_active');
        } else {
            elemTooltip.classList.add('tooltip_active');
        elemTooltip.innerText = element.getAttribute('title');
        
        const top = element.getBoundingClientRect().bottom + 20;
        const left = element.getBoundingClientRect().left + 10;
        elemTooltip.setAttribute('style', `left: ${left}px; top: ${top}px`)
        }
    }
});