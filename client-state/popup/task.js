'use strict'

window.addEventListener('load', () => {
    const subscribeModal = document.getElementById('subscribe-modal');

    const getCookie = (subModal) => {
        const value = "; " + document.cookie;
        let parts = value.split("; " + subModal + "=");
        if (parts.length === 2) {
            return parts
                .pop()
                .split(";")
                .shift();
        }
    }

    if (getCookie('subModal') == 'deactive') {
        subscribeModal.classList.remove('modal_active');
    } else {
        subscribeModal.classList.add('modal_active')

        const modalClose = document.querySelector('.modal__close_times');
        modalClose.onclick = () => {
            subscribeModal.classList.remove('modal_active');
            document.cookie = 'subModal=deactive'
        }
    }
})
