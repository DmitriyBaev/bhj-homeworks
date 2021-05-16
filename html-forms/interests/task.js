'use strict'

const ulChild = document.querySelectorAll('.interests_active');
const arrayUlChild = Array.from(ulChild)

arrayUlChild.forEach(element => {
    const parentElement = element.closest('li');
    const parentInput = parentElement.querySelector('input');
    const childInput = element.querySelectorAll('input')
    const arraychildInput = Array.from(childInput)

    parentInput.onchange = () => {
        arraychildInput.forEach(elem => {

            if (parentInput.checked) {
                elem.checked = true
            } else {
                elem.checked = false
            }
        });
    }




    // arraychildInput.forEach(elem => {
    //     elem.onchange = () => {

            
    //         function allChecked(elm) {
    //             return elm.checked = true
    //         }

    //         if (arraychildInput.every(allChecked)) {
    //             parentInput.checked = true
    //         } else {
    //             parentInput.indeterminate = true
    //         }
    //     }
    // })

});



