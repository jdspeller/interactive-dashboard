let tasks = [];
const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name');
const taskPrioritySelect = document.getElementById('task-priority');
const taskImportantCheckbox = document.getElementById('task-important');
const taskListDiv = document.getElementById('task-list');
const clearListBtn = document.getElementById('clear-list-btn');
function addTask(name, priority, isImportant) {
    const newTask = {
        id: Date.now(),
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };
    tasks.push(newTask);
    renderTasks();
    logTasksList();
}
function toggleTaskComplete(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
    });
    renderTasks();
    logTaskList();
}
function deleteTaskList() {
    tasks = [];
    renderTasks();
    logTaskList();
}
function logTaskList() {
    console.log(JSON.stringify(tasks));
}
function renderTasks() {
    taskListDiv.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
         const textSpan = document.createElement('span');
        textSpan.textContent = `[${task.priority}] ${task.name}`;
        if (task.isImportant) {
            taskItem.style.borderLeftColor = '#d9534f';
         } else if (task.priority === 'Medium') {
            taskItem.style.borderLeftColor = '#f0ad4e';
        } else if (task.priority === 'Low') {
                   taskItem.style.borderLeftColor = '#5cb85c'; 
        }

         if (task.isImportant) {
            textSpan.style.color = 'red';
            textSpan.style.fontWeight = 'bold';
        }
           if (task.isCompleted) {
            textSpan.style.textDecoration = 'line-through';
            textSpan.style.opacity = '0.6';
        }
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.isCompleted ? 'Undo' : 'Complete';
        completeBtn.addEventListener('click', () => toggleTaskComplete(task.id));
        actionsDiv.appendChild(completeBtn);
        taskItem.appendChild(textSpan);
        taskItem.appendChild(actionsDiv);
        taskListDiv.appendChild(taskItem);
    });
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value;
    const isImportant = taskImportantCheckbox.checked;

    if (name) {
        addTask(name, priority, isImportant);
        taskNameInput.value = '';
        taskPrioritySelect.value = 'Low';
        taskImportantCheckbox.checked = false;
    }
});

clearListBtn.addEventListener('click', () => {
    deleteTaskList();
});