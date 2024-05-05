function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Por favor ingresa una tarea.");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = input;
    li.addEventListener("click", toggleTask);
    ul.appendChild(li);

    document.getElementById("taskInput").value = "";
}

function toggleTask() {
    this.classList.toggle("completed");
}

document.addEventListener("DOMContentLoaded", function() {
    var taskItems = document.querySelectorAll("#taskList li");
    taskItems.forEach(function(item) {
        item.addEventListener("click", toggleTask);
    });
});