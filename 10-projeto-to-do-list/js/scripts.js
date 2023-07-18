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
    this.checkEmptyList('add');
  }

  removeTask(t) {
    const taskToRemove = t.parentElement;
    taskToRemove.remove();

    this.checkEmptyList('remove');
  }

  completeTask(t) {
    t.classList.toggle('done');
  }

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

  checkEmptyList(cmd) {
    const emptyMessage = document.querySelector('#empty-tasks');

    if (cmd === 'add') {
      this.totalTasks++;
    } else if (cmd === 'remove') {
      this.totalTasks--;
    }

    if (this.totalTasks === 1) {
      emptyMessage.classList.remove('hide');
    } else {
      emptyMessage.classList.add('hide');
    }
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
