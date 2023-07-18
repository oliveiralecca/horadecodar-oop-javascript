class Todo {
  constructor() {
    this.totalTasks = document.querySelectorAll('.task').length;
  }

  addTask(t) {
    const template = document.querySelector('.task').cloneNode(true);
    template.classList.remove('hide');

    const templateText = template.querySelector('.task-title');
    templateText.textContent = t;

    const list = document.querySelector('#tasks-container');
    list.appendChild(template);
  }
}

const todo = new Todo();

// events
const addButton = document.querySelector('#add');
addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const task = document.querySelector('#task');
  if (task.value === '') return;
  todo.addTask(task.value);

  task.value = '';
});
