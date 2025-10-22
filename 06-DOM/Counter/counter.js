let count = 0;

function changevalue(button) {
    if (button.id === "posetive") {
        count += 1;
    } else {
        count -= 1;
    }
    document.getElementById("count").innerHTML = count;
}