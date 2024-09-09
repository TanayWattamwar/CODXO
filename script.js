function addTask() {
    var taskInput = document.getElementById("new-task");
    var timeInput = document.getElementById("new-time");
    var task = taskInput.value;
    var time = timeInput.value;

    if (task.trim() !== "" && time.trim() !== "") {
        var listItem = document.createElement("li");

        var taskSpan = document.createElement("span");
        taskSpan.textContent = task;

        var timeSpan = document.createElement("span");
        timeSpan.textContent = time;
        timeSpan.className = "time-slot";

        listItem.appendChild(taskSpan);
        listItem.appendChild(timeSpan);
        
        document.getElementById("todo-list").appendChild(listItem);
        taskInput.value = "";
        timeInput.value = "";
    } else {
        alert("Please enter both task and time.");
    }
}
