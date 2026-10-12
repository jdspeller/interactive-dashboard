let myTasks = [];
let userTasksList = document.createElement("ul");
userTasksList.id = "user-tasks";
document.getElementById("task-list").appendChild(userTasksList);
document.getElementById("add-task").addEventListener("click", function() {
    let taskInput = document.getElementById("task-name");
    let taskText = taskInput.value;
    if (taskText.trim() !== "") {
        myTasks.push(taskText);
        let li = document.createElement("li");
        li.textContent = taskText;
        userTasksList.appendChild(li);
        taskInput.value = "";
    }
});

