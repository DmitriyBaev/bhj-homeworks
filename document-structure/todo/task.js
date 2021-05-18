'use strict'

const input = document.getElementById("task__input");

input.addEventListener('keydown', (e) => {

    if (e.code == "Enter" || e.code == "NumpadEnter") {

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
                element.onclick = () => {
                    const parentTask = element.closest('.task');
                    parentTask.remove()
                }
            });
        }
    }
})

