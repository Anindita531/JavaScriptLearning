
function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Anindita"));  // Output: Hello, Anindita!

//2. Function Types
//a) Named Function
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
//b) Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));
//c) Arrow Functions (ES6)
const subtract = (a, b) => a - b;
console.log(subtract(10, 4));
//3. Arrays (Collection of Data)

//Arrays store multiple values in a single variable.

let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits[0]);  // Apple
console.log(fruits.length);  // 4
let numbers = [10, 20, 30, 40];

numbers.push(50);      // Add at end → [10,20,30,40,50]
numbers.pop();         // Remove last → [10,20,30,40]
numbers.unshift(5);    // Add at start → [5,10,20,30,40]
numbers.shift();       // Remove first → [10,20,30,40]

console.log(numbers.includes(30)); // true
console.log(numbers.indexOf(40));  // 3

console.log(numbers.join(" - "));  // "10 - 20 - 30 - 40"
//4. Loops with Arrays
let colors = ["Red", "Blue", "Green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//5. Objects (Key-Value Pairs)
//Creating Objects
colors.forEach((color, index) => {
    console.log(`Color ${index + 1}: ${color}`);
});
//5. Objects (Key-Value Pairs)
//Creating Objects
let book = {
    title: "DSA",
    author: "Yashavant Kanetkar",
    price: 250
};

console.log(book.title);     // DSA
console.log(book["author"]); // Yashavant Kanetkar
//Adding & Updating Properties
book.publisher = "BPB";
book.price = 300;
console.log(book);



