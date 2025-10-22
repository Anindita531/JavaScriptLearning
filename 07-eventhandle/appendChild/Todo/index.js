const list = document.querySelector("#todoList");
    const btn = document.querySelector("#addBtn");

    let count = 1;

    btn.addEventListener("click", function() {
      // নতুন element বানানো
      let li = document.createElement("li");
      li.innerText = "Task " + count;

      // list এর মধ্যে ঢুকানো
      list.appendChild(li);

      count++;
    });