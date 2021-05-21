'use strict'

const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");

const addTask = () => {
    input.value = input.value.trim();
    if (input.value) {

        const work = document.createElement('div');
        work.classList.add('task');
        work.innerHTML = (`
        <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>`);


        const tasksList = document.getElementById("tasks__list");
        tasksList.appendChild(work);

        input.value = '';

        const taskRemove = document.querySelectorAll('.task__remove');
        const arrayTaskRemove = Array.from(taskRemove);
        arrayTaskRemove.forEach(element => {
            element.onclick = () => element.closest('.task').remove()
        })

    }
}

input.addEventListener('keyup', (e) => {

    if (e.key == "Enter") {
        addTask()
    }
    e.preventDefault()
})

button.addEventListener('click', (e) => {
    addTask()
    e.preventDefault()
})