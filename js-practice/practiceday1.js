//task 1
const name=`Anindita `;  
let age=21;  
let friends=["Anu","Me","Myself","I"];  
details={name:"Anindita",branch:"IT",Roll:21};  
console.log(`My name is ${name}`);  
console.log("age:"+age);  
console.log(friends);  
console. log(details);  
//task2
let x = 5;
let y = "5";

console.log(x == y);// True
console.log(x === y);//   False
console.log(typeof y);//String  
//Task 3 – Template Literals
/*একটি person object বানাও যার মধ্যে থাকবে name, age, city তারপর template literal দিয়ে একটা সুন্দর sentence print করো।* /

//Task 4 – typeof Practice
/*নিজে ৫টা ভ্যারিয়েবল বানাও — string, number, boolean, null, undefined তারপর typeof দিয়ে সবগুলো type print করো।*/
//Task 5 – Array Access & Update
/*তোমার কাজ: একটা colors array বানাও তাতে ৩টা রঙ রাখো তারপর দ্বিতীয় রঙটা পরিবর্তন করে নতুন array print করো।*/
//Task 6 – Object Access & Update
/*তোমার কাজ: একটা car object বানাও — brand, model, year তারপর model update করে পুরো object print করো।*/
//Task 7 – Mini Quiz
let m = 10;
let n = "5";

console.log(m + n);       // ?
console.log(m - n);       // ?
console.log(typeof (m + n)); // ?

//Task 8:

/* একটা book নামের object বানাও, যেটাতে থাকবে:

title

author

price

isAvailable (boolean)

tags (array: যেমন ["fiction","drama","romance"])

শেষে console.log() দিয়ে title এবং tags-এর দ্বিতীয় element প্রিন্ট করো। */
let book={title: "DSA", author:"yashvant kanethkar",price:250,isAvailable:false,tags:["array","LL","stack"]}
console.log("My book :",book);
 
//Task 8 (Quiz)
/*
আউটপুট কী হবে?*/

const a = 10;
const b = "10";
console.log(a + b);//1010
console.log(a - b);//0
console.log(typeof (a + b));//string