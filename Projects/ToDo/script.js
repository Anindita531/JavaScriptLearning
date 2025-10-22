const loadBtn = document.querySelector("#loadDataBtn");
const refreshBtn = document.querySelector("#refreshBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const spinner = document.querySelector("#spinner");
const dataContainer = document.querySelector("#dataContainer");

let users = [];
let todos = [];

async function fetchData() {
  spinner.style.display = "block";

  try {
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    let storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (!storedUsers || !storedTodos) {
      const [usersRes, todosRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/todos")
      ]);
      users = await usersRes.json();
      todos = await todosRes.json();

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      users = storedUsers;
      todos = storedTodos;
    }

    renderData();

  } catch (err) {
    console.error("Error:", err);
    dataContainer.innerHTML = "<p style='color:red;'>Failed to load data</p>";
  } finally {
    spinner.style.display = "none";
  }
}

// Render using DOM methods
function renderData() {
  dataContainer.innerHTML = "";

  const usersDiv = document.createElement("div");
  usersDiv.innerHTML = "<h2>Users</h2>";
  users.forEach(u => {
    const p = document.createElement("p");
    p.textContent = u.name;
    usersDiv.appendChild(p);
  });

  const todosDiv = document.createElement("div");
  todosDiv.innerHTML = "<h2>Todos</h2>";
  todos.slice(0,10).forEach(t => {
    const p = document.createElement("p");
    p.textContent = t.title;
    todosDiv.appendChild(p);
  });

  dataContainer.appendChild(usersDiv);
  dataContainer.appendChild(todosDiv);
}

// Refresh
refreshBtn.addEventListener("click", () => {
  localStorage.removeItem("users");
  localStorage.removeItem("todos");
  users = [];
  todos = [];
  dataContainer.innerHTML = "";
  fetchData();
});

// Download JSON
downloadBtn.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({users, todos}, null, 2)], {type: "application/json"});
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Load button
loadBtn.addEventListener("click", fetchData);
