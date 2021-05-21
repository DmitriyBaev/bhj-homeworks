'use strict'

const inc = document.querySelectorAll('.product__quantity-control_inc');
const arrInc = Array.from(inc);
const dec = document.querySelectorAll('.product__quantity-control_dec');
const arrDec = Array.from(dec);
const productQuantity = document.querySelectorAll('.product__quantity-value');
const arrProductQuantity = Array.from(productQuantity);
const addButton = document.querySelectorAll('.product__add');
const arrAddButton = Array.from(addButton);
const product = document.querySelectorAll('.product');
const arrProduct = Array.from(product);
const productImage = document.querySelectorAll('.product__image');
const arrProductImage = Array.from(productImage);


arrInc.forEach((element, index) => {
    element.onclick = () => {
        arrProductQuantity[index].textContent = +arrProductQuantity[index].textContent + 1;
    }
});

arrDec.forEach((element, index) => {
    element.onclick = () => {
        if (arrProductQuantity[index].textContent > 1) {
            arrProductQuantity[index].textContent = arrProductQuantity[index].textContent - 1;
        }
    }
});

arrAddButton.forEach((element, index) => {
    element.onclick = () => {

        const productsInBasket = document.querySelectorAll('.cart__product');
        const arrProductsInBasket = Array.from(productsInBasket);

        const concidence = arrProductsInBasket.find(elem =>
            elem.dataset.id == arrProduct[index].dataset.id
        )
        if (concidence) {
            concidence.querySelector('.cart__product-count').textContent = +concidence.querySelector('.cart__product-count').textContent + +arrProductQuantity[index].textContent;
        } else {
            const addInBasket = document.createElement('div');
            addInBasket.classList.add('cart__product');
            addInBasket.setAttribute('data-id', `${arrProduct[index].dataset.id}`);
            addInBasket.innerHTML = (`
        <img class="cart__product-image" src='${arrProductImage[index].getAttribute('src')}'>
            <div class="cart__product-count">${arrProductQuantity[index].textContent}</div>`)
            document.querySelector('.cart__products').appendChild(addInBasket);
        }

    }
});

