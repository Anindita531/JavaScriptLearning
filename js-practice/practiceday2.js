//Day 2 Practice Tasks 📝
//Task 1 – Function
//একটা function বানাও যা ২টি number নেবে এবং যোগফল return করবে  এরপর ৩টি ভিন্ন number দিয়ে কল করো
const add=(a,b)=>{
return a+b;
}
console.log(add(5,9));
const addsum=(a,b,c)=>{
return a+b+c;
}
console.log(addsum(5,9,8));
//or
const sum=(a)=>{
let s=0
for(let i=0;i<a.length;i++)
{
s+=a[i];
}
return s;
}
console.log(sum([5,9,8]));

//Alternative (Modern JS)
const sum2 = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum2([5, 9, 8])); // 22
//Task 2 – Condition

/* একটি variable marks নাও যদি marks >= 90 → “Grade A” যদি marks >= 75 → “Grade B”  অন্যথায় → “Grade C”*/
let marks=55;
if(marks>=90){
console.log("Grade A" );
}
else if(marks>=75){
console.log("Grade B");
}
else{
console.log("Grade C" );
}
//কিন্তু উন্নত version:

const getGrade = (marks) => 
  marks >= 90 ? "Grade A" : marks >= 75 ? "Grade B" : "Grade C";

console.log(getGrade(55));  // Grade C
//Task 3 – Loop
/*একটি array বানাও: ["Apple","Banana","Orange"]for…of লুপ ব্যবহার করে সব element print করো*/
let fruits =["Apple","Banana","Orange"];
let i=0;
for(let fruit of fruits )
{
console.log("Fruit[",i,"] =",fruit);
i++;
}
//আরও clean কোড:

const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit, index) => console.log(`Fruit[${index}] = ${fruit}`));








