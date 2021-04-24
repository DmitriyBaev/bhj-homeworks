'use strict'



for (let index = 1; index <= 9 ; index++) {
    let getHole = index => document.getElementById(`hole${index}`);
    getHole().onclick = () => {
        

        if (hole.className.includes( 'hole_has-mole' )) {
            const deads = document.getElementById('dead');
            deads.textContent += 1 
        } else {
            const losts = document.getElementById('lost');
            losts.textContent += 1
        }
        
        if (deads.textContent == 10) {
            alert('Победа');
            deads.textContent = 0;
            losts.textContent = 0
        }
        
        if (losts.textContent == 5) {
            alert ('Вы проиграли');
            deads.textContent = 0;
            losts.textContent = 0
        }
    }
}
