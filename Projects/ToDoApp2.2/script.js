// DOM Elements
const loadBtn = document.querySelector("#loadDataBtn");
const refreshBtn = document.querySelector("#refreshBtn");
const themeBtn = document.querySelector("#themeBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const spinner = document.querySelector("#spinner");
const dataContainer = document.querySelector("#dataContainer");
const searchInput = document.querySelector("#searchInput");
const paginationDiv = document.querySelector("#pagination");
const userFilter = document.querySelector("#userFilter");
const sortSelect = document.querySelector("#sortSelect");
const newTodoInput = document.querySelector("#newTodoInput");
const newTodoUser = document.querySelector("#newTodoUser");
const addTodoBtn = document.querySelector("#addTodoBtn");

let users = [];
let todos = [];
let currentPage = 1;
const itemsPerPage = 5;
let darkMode = false;

// Fetch Data
async function fetchData() {
  spinner.style.display = "block";

  try {
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);

    if (!storedUsers || !storedTodos) {
      const [usersRes, todosRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/todos")
      ]);

      users = await usersRes.json();
      todos = await todosRes.json();

      localStorage.setItem("users", JSON.stringify(users));
      console.log("Users saved to localStorage",JSON.stringify(users));
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      users = storedUsers;
      todos = storedTodos;
    }

    populateUserSelects();
    renderData();

  } catch (err) {
    console.error(err);
    dataContainer.innerHTML = "<p style='color:red;'>Failed to load data</p>";
  } finally {
    spinner.style.display = "none";
  }
}

// Populate user dropdowns
function populateUserSelects() {
  userFilter.innerHTML = '<option value="all">All Users</option>';
  newTodoUser.innerHTML = '';
  users.forEach(u => {
    const opt1 = document.createElement("option");
    opt1.value = u.id;
    opt1.textContent = u.name;
    userFilter.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = u.id;
    opt2.textContent = u.name;
    newTodoUser.appendChild(opt2);
  });
}

// Render Data
function renderData() {
  dataContainer.innerHTML = "";
  let filteredTodos = todos;

  const searchTerm = searchInput.value.toLowerCase();
  filteredTodos = filteredTodos.filter(t => t.title.toLowerCase().includes(searchTerm));

  if (userFilter.value !== "all") {
    filteredTodos = filteredTodos.filter(t => t.userId == userFilter.value);
  }

  if (sortSelect.value === "title") {
    filteredTodos.sort((a,b) => a.title.localeCompare(b.title));
  } else if (sortSelect.value === "status") {
    filteredTodos.sort((a,b) => a.completed - b.completed);
  }

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
  const start = (currentPage-1)*itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedTodos = filteredTodos.slice(start,end);

  paginatedTodos.forEach((t) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (t.completed) card.classList.add("completed");

    const input = document.createElement("input");
    input.value = t.title;
    input.addEventListener("change", () => {
      t.title = input.value;
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = t.completed ? "Undo" : "Done";
    toggleBtn.addEventListener("click", () => {
      t.completed = !t.completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderData();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      const idx = todos.indexOf(t);
      todos.splice(idx,1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderData();
    });

    card.appendChild(input);
    card.appendChild(toggleBtn);
    card.appendChild(deleteBtn);
    dataContainer.appendChild(card);
  });

  // Pagination
  paginationDiv.innerHTML = "";
  for (let i=1;i<=totalPages;i++){
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.disabled = i===currentPage;
    btn.addEventListener("click", ()=>{ currentPage=i; renderData(); });
    paginationDiv.appendChild(btn);
  }
}

// Add Todo
addTodoBtn.addEventListener("click", () => {
  const title = newTodoInput.value.trim();
  const userId = Number(newTodoUser.value);
  if (!title) return alert("Enter todo title");
  todos.push({userId, title, completed:false});
  localStorage.setItem("todos", JSON.stringify(todos));
  newTodoInput.value = "";
  renderData();
});

// Event Listeners
loadBtn.addEventListener("click", fetchData);
refreshBtn.addEventListener("click", ()=>{
  localStorage.removeItem("users");
  localStorage.removeItem("todos");
  users=[];
  todos=[];
  dataContainer.innerHTML="";
  fetchData();
});

themeBtn.addEventListener("click", ()=>{
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
});

searchInput.addEventListener("keyup", ()=>{ currentPage=1; renderData(); });
userFilter.addEventListener("change", ()=>{ currentPage=1; renderData(); });
sortSelect.addEventListener("change", ()=>{ currentPage=1; renderData(); });

downloadBtn.addEventListener("click", ()=>{
  const blob = new Blob([JSON.stringify({users,todos},null,2)],{type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download="data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
