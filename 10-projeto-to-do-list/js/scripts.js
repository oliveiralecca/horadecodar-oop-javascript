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

    this.addEvents();
  }

  removeTask(t) {
    const taskToRemove = t.parentElement;
    taskToRemove.remove();
  }

  completeTask(t) {}

  addEvents() {
    const allTrashButtons = document.querySelectorAll('.fa-trash');
    const lastTrashButton = allTrashButtons[allTrashButtons.length - 1];

    // remove task event
    lastTrashButton.addEventListener('click', function () {
      todo.removeTask(this);
    });

    const allCheckButtons = document.querySelectorAll('.fa-check');
    const lastCheckButton = allCheckButtons[allCheckButtons.length - 1];

    // complete task event
    lastCheckButton.addEventListener('click', function () {
      todo.completeTask(this);
    });
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
