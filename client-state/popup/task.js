'use strict'

window.addEventListener('load', () => {
    const getCookie = (subscribeModal) => {
        const value = "; " + document.cookie;
        let parts = value.split("; " + subscribeModal + "=");
        if (parts.length === 2) {
            return parts
                .pop()
                .split(";")
                .shift();
        }
    }

    const subscribeModal = document.getElementById('subscribe-modal');
    if (getCookie == 'deactive') {
        subscribeModal.classList.remove('modal_active');
    } else {
        subscribeModal.classList.add('modal_active')

        const modalClose = document.querySelector('.modal__close_times');
        modalClose.onclick = () => {
            subscribeModal.classList.remove('modal_active');
            document.cookie = 'subscribeModal=deactive'
        }
    }
})
