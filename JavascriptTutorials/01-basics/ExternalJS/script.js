//External JavaScript File
console.log("Hello from external JavaScript file!");
alert("Welcome to the external JavaScript file!");
function greetUser(name) {
    return `Hello, ${name}!`;
}
console.log(greetUser("Alice"));
console.error("This is an error message.");
console.warn("This is a warning message.");
console.info("This is an informational message.");
document.getElementById("demo").innerHTML = "This text is set by external JavaScript.";
