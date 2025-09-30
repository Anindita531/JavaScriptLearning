//a) Normal Function

function greet(name) { 
 return `Hello, ${name}!`; 
}
console.log(greet("Anindita"));
//b) Function with No Parameters
function sayHi() {
  console.log("Hi!");
}
sayHi(); // Hi!

//c) Arrow Function (Modern JS)
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 10)); // 15
const multiply = (a, b) => a * b;
console.log(multiply(5, 2)); // 10
//Conditional if-else
//a) if…else
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
//b) else if
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

//c) Ternary Operator
let access = age >= 18 ? "Allowed" : "Not allowed";
console.log(access);

//3️ Loops 🔄
//a) for loop
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}
//b) while loop
let i = 0;
while (i < 5) {
  console.log("While:", i);
  i++;
}
//c) for…of loop (Array iteration)
let friends = ["Anu", "Me", "Myself"];
for (let friend of friends) {
  console.log(friend);
}
//d) for…in loop (Object iteration)
let book = {title: "DSA", author: "Yashvant", price: 250};
for (let key in book) {
  console.log(key, ":", book[key]);
}






