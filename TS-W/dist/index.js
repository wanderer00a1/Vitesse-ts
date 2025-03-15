"use strict";
const del = document.getElementById("dlt");
const btn = document.getElementById("btn");
const input = document.getElementById("todo");
const form = document.querySelector("form");
const list = document.getElementById("list");
let tasks = readTasks();
tasks = tasks.filter((task) => task.accomplished === false);
tasks.forEach(addTask);
function readTasks() {
    const taskJson = localStorage.getItem("tasks");
    if (taskJson === null)
        return [];
    return JSON.parse(taskJson);
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function submit(e) {
    e.preventDefault();
    const newTask = {
        mission: input.value,
        accomplished: false
    };
    if (newTask.mission.length) {
        addTask(newTask);
        tasks.push(newTask);
        saveTasks();
    }
    input.value = "";
}
function addTask(newMission) {
    const listed = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = newMission.accomplished;
    checkbox.addEventListener("change", function () {
        newMission.accomplished = checkbox.checked;
        saveTasks();
    });
    listed.append(newMission.mission);
    listed.append(checkbox);
    list.append(listed);
}
form.addEventListener("submit", submit);
del.addEventListener("click", function () {
    window.location.reload();
});
