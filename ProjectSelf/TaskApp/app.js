const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let isDarkMode = false;
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
addTaskButton.addEventListener('click', addTask);




function getNextTaskId() {
    if (tasks.length === 0) return 0;
    return Math.max(...tasks.map(t => t.id)) + 1;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const newTask = { id: getNextTaskId(), text: taskText, completed: false };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
}

function renderTasks() {
    taskList.innerHTML = '';
     if (tasks.length==0) {
            const li = document.createElement('li');
            li.textContent = 'No tasks available';
            taskList.appendChild(li);
            return;
        }
    tasks.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t.text;
        if (t.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleTaskCompletion(t.id));
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(t.id);
        }
        );
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
renderTasks();

function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}    