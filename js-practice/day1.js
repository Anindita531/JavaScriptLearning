//Hello world print
console.log("Hello, JavaScript!");
console.log("Hello, World!");
//Three types variables 
var name = "Anindita";
console.log(name);  // Output: Anindita
let age = 20;
console.log(age);  // 20
age = 21;
console.log(age);  // 21
const day = 1;
console.log(day);  // 20
//day = 2; //error
console.log(day);  // 21
let Sname = "Anindita";  // string can't use same variable that has declared already(name)
let month= 8;           // number
let isStudent = true;   // boolean
let friends = ["Ayaan", "Ria", "Sam"];  // array
let details = { name: "Anindita", branch: "IT" };  // object

console.log(name, age, isStudent);
console.log(friends[0]);    // Ayaan
console.log(details.branch); // IT

//Arithmatic Operation 
let a = 10, b = 5; 
console.log(a + b);  // 15 
console.log(a - b);  // 5 
console.log(a * b);  // 50 
console.log(a / b);  // 2 
console.log(a % b);  // 0 
 //Conditional Operations 
console.log(5 == "5");   // true  (value check only) 
console.log(5 === "5");  // false (value + type check) 
console.log(10 > 5);     // true 
console.log(10 <= 5);    // false
//Template Literals
console.log("My name is " + name + " and I am " + age + " years old.");  // পুরনো পদ্ধতি
console.log(`My name is ${name} and I am ${age} years old.`);           // নতুন পদ্ধতি

//typeof Practice
let x = "Hello";
let y = 42;
let c = true;
let d = null;
let e;

console.log(typeof x);  // string
console.log(typeof y);  // number
console.log(typeof c);  // boolean
console.log(typeof d);  // object ❗
console.log(typeof e);  // undefined

//Array Access & Update
let fruits = ["apple", "banana", "mango"]; 

console.log(fruits[1]);  // banana 

 fruits[2] = "orange";    // mango → orange 

console.log(fruits); 
// Object Access & Update
let student = {
  name: "Ria",
  roll: 12,
  branch: "CSE"
};

console.log(student.name);     // Ria
student.branch = "IT";         // Update
console.log(student);

