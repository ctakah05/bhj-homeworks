const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.querySelector('.tasks__add');
tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(taskInput.value.trim()) {
      tasksList.insertAdjacentHTML('beforeend', `
        <div class="task">
          <div class="task__title">
            ${taskInput.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
      taskInput.value = '';     
      const task = tasksList.querySelectorAll('.task');
      const taskRemove = tasksList.querySelectorAll('.task__remove');    
      const i = taskRemove.length - 1;
      taskRemove[i].onclick = function() {
        task[i].remove();
      }
    }
  })