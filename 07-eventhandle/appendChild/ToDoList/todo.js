  const todo = document.getElementById("todo");
    const addBtn = document.getElementById("addBtn");
    const removeBtn = document.getElementById("removeBtn");

    addBtn.addEventListener("click", () => {
      const input = document.getElementById("taskInput").value;
      if (input) {
        const task = document.createElement("p");
        task.textContent = input;
        todo.appendChild(task);
        document.getElementById("taskInput").value = "";
      }
    });

    removeBtn.addEventListener("click", () => {
      if (todo.lastElementChild.tagName === "P") {
        todo.removeChild(todo.lastElementChild);
      }
    });