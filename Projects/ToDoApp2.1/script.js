// DOM Elements
const loadBtn = document.querySelector("#loadDataBtn");
const refreshBtn = document.querySelector("#refreshBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const spinner = document.querySelector("#spinner");
const dataContainer = document.querySelector("#dataContainer");
const searchInput = document.querySelector("#searchInput");
const paginationDiv = document.querySelector("#pagination");

let users = [];
let todos = [];
let currentPage = 1;
const itemsPerPage = 5;

// Fetch Data
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
    console.error(err);
    dataContainer.innerHTML = "<p style='color:red;'>Failed to load data</p>";
  } finally {
    spinner.style.display = "none";
  }
}

// Render Data with Pagination + Search
function renderData() {
  dataContainer.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();

  // Users
  const usersDiv = document.createElement("div");
  usersDiv.innerHTML = "<h2>Users</h2>";
  users
    .filter(u => u.name.toLowerCase().includes(searchTerm))
    .forEach(u => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = u.name;
      usersDiv.appendChild(card);
    });

  // Todos Pagination
  const filteredTodos = todos.filter(t => t.title.toLowerCase().includes(searchTerm));
  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedTodos = filteredTodos.slice(start, end);

  const todosDiv = document.createElement("div");
  todosDiv.innerHTML = "<h2>Todos</h2>";
  paginatedTodos.forEach((t, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (t.completed) card.classList.add("completed");

    // Inline editable input
    const input = document.createElement("input");
    input.type = "text";
    input.value = t.title;
    input.addEventListener("change", () => {
      t.title = input.value;
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    // Completed toggle
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = t.completed ? "Undo" : "Done";
    toggleBtn.addEventListener("click", () => {
      t.completed = !t.completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderData();
    });

    // Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      const globalIndex = todos.indexOf(t);
      todos.splice(globalIndex, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderData();
    });

    card.appendChild(input);
    card.appendChild(toggleBtn);
    card.appendChild(deleteBtn);
    todosDiv.appendChild(card);
  });

  dataContainer.appendChild(usersDiv);
  dataContainer.appendChild(todosDiv);

  // Pagination buttons
  paginationDiv.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.disabled = i === currentPage;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderData();
    });
    paginationDiv.appendChild(btn);
  }
}

// Event Listeners
loadBtn.addEventListener("click", fetchData);
refreshBtn.addEventListener("click", () => {
  localStorage.removeItem("users");
  localStorage.removeItem("todos");
  users = [];
  todos = [];
  dataContainer.innerHTML = "";
  fetchData();
});

searchInput.addEventListener("keyup", () => {
  currentPage = 1;
  renderData();
});

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
