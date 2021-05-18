'use strict'

const tooltips = document.querySelectorAll('.has-tooltip');
const arrTooltips = Array.from(tooltips);

arrTooltips.forEach(element => {
    element.onclick = (e) => {
        e.preventDefault();

        const previousActiveTooltip = document.querySelector('.tooltip_active');
        if (previousActiveTooltip) {
            previousActiveTooltip.classList.remove('tooltip_active');
        }
        
        let elemTooltip = document.createElement('div');
        
        elemTooltip.classList.add('tooltip');
        elemTooltip.classList.add('tooltip_active');
        elemTooltip.innerText = element.getAttribute('title');
        //elemTooltip.setAttribute('data-position', 'bottom')
        const top = element.getBoundingClientRect().bottom + 20;
        const left = element.getBoundingClientRect().left + 10;
        elemTooltip.setAttribute('style', `left: ${left}; top: ${top}`)// Не работает
        
        element.insertAdjacentElement("afterend", elemTooltip);
        
    }
});