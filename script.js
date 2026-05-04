console.log("App started");
tasks.forEach((task, index) => {
  const li = document.createElement("li");
  li.textContent = task;

  
  li.onclick = () => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  };

  list.appendChild(li);
});
