const loadBtn = document.getElementById("loadBtn");
const spinner = document.getElementById("spinner");
const tableBody = document.querySelector("#userTable tbody");
const searchInput = document.getElementById("searchInput");
let usersData = [];

// Load Users
loadBtn.addEventListener("click", async () => {
  spinner.style.display = "block";
  tableBody.innerHTML = "";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    usersData = await response.json();
    localStorage.setItem("usersData", JSON.stringify(usersData));
    displayUsers(usersData);
  } catch (err) {
    alert("Error loading users: " + err);
  } finally {
    spinner.style.display = "none";
  }
});
//Upload JSON,csv
document.getElementById("uploadToLoadUser").addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json,.csv";
    fileInput.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
        try {
        if(file.name.endsWith(".json")){
          usersData = JSON.parse(content);
        }
        else if(file.name.endsWith(".csv")){
            const lines = content.split("\n");
            const headers = lines[0].split(",");
            usersData = lines.slice(1).map(line => {
              const values = line.split(",");
                const obj = {};
                headers.forEach((header, index) => {
                    obj[header.trim().toLowerCase()] = values[index].trim();
                });
                return obj;
            }
            );
        }} catch (err) {
        alert("Error parsing file: " + err);
        return;
      } 
        localStorage.setItem("usersData", JSON.stringify(usersData));
        displayUsers(usersData);
    };
    reader.readAsText(file);
  }
    fileInput.click();
});
// Display Users in Table
function displayUsers(data) {
  tableBody.innerHTML = "";
  data.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>`;
    tableBody.appendChild(row);
  });
}

// Delete User
function deleteUser(index) {
  if(confirm("Are you sure to delete this user?")){
    usersData.splice(index,1);
    const usernewData = JSON.parse(localStorage.getItem("usersData")) || [];
    usernewData.splice(index,1);
    localStorage.setItem("usersData", JSON.stringify(usernewData));
    localStorage.setItem("usersData", JSON.stringify(usersData));
    displayUsers(usersData);
  }
}

// Edit User
function editUser(index){
  const user = usersData[index];
  const newName = prompt("Enter new name:", user.name);
  const newEmail = prompt("Enter new email:", user.email);
  if(newName && newEmail){
    usersData[index].name = newName;
    usersData[index].email = newEmail;
    localStorage.setItem("usersData", JSON.stringify(usersData));
    displayUsers(usersData);
  }
}

// Search Filter
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = usersData.filter(u => u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term));
  displayUsers(filtered);
});

// Export JSON
document.getElementById("saveJsonBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(usersData, null, 2)], { type: "application/json" });
 // console.log(blob);
  const link = document.createElement("a");
 // console.log(link);
  link.href = URL.createObjectURL(blob);
  link.download = "users.json";
  link.click();
});

// Export CSV
document.getElementById("saveCsvBtn").addEventListener("click", () => {
  const csvRows = [];
  const headers = ["ID","Name","Email"];
  csvRows.push(headers.join(","));
  usersData.forEach(user=>{
    csvRows.push([user.id,user.name,user.email].join(","));
  });
  const blob = new Blob([csvRows.join("\n")], {type:"text/csv"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "users.csv";
  link.click();
});
//Insert users
document.getElementById("insertUserBtn").addEventListener("click", () => {
  const name = prompt("Enter user name:");
  const email = prompt("Enter user email:");const CONTAINER = document.querySelector("tbody").parentElement;
    if(name && email){
  spinner.style.display = "block";
    const newUser = {
      id: usersData.length ? usersData[usersData.length - 1].id + 1 : 1,
      name, email
    };
    usersData.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(usersData));
    displayUsers(usersData);spinner.style.display = "none";
  }
});

// Load from localStorage on page load
window.onload = () => {
  const storedData = JSON.parse(localStorage.getItem("usersData"));
  
  if(storedData){
    usersData = storedData;
    displayUsers(usersData);
     CONTAINER.classList.add("loaded");

  }
    else{
    CONTAINER.style.display = "none";
  }
};