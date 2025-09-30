//Different Data Types in JavaScript
//1. String
let name = "John Doe";
console.log("Name:", name);
console.log("Type of name:", typeof name);
console.log("Length of name:", name.length);

//2. Number (also includes Integer and Float)
let age = 30;       // Integer              
let height = 5.9;   // Float
console.log("Age:", age);
console.log("Type of age:", typeof age);
console.log("Height:", height);
console.log("Type of height:", typeof height);  
console.log("Age + Height:", age + height);
console.log("Age * Height:", age * height);

//3. Boolean
let isStudent = false;
console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);    
console.log("Not isStudent:", !isStudent);

//4. Undefined
let address;
console.log("Address:", address);
console.log("Type of address:", typeof address);        
address = "123 Main St";
console.log("Updated Address:", address);
console.log("Type of updated address:", typeof address);        
//5. Null
let phoneNumber = null;
console.log("Phone Number:", phoneNumber);
console.log("Type of phoneNumber:", typeof phoneNumber); // Note: This will show "object" due to a quirk in JavaScript      
phoneNumber = "555-1234";
console.log("Updated Phone Number:", phoneNumber);
console.log("Type of updated phoneNumber:", typeof phoneNumber);    
//6. Object
let person = {
    name: "Alice",
    age: 25,
    isEmployed: true
};  
console.log("Person:", person);
console.log("Type of person:", typeof person);        
console.log("Person's Name:", person.name);     
console.log("Person's Age:", person.age);     
console.log("Person's Employment Status:", person.isEmployed);
//7. Array (which is a type of Object)
let colors = ["Red", "Green", "Blue"];
console.log("Colors:", colors);
console.log("Type of colors:", typeof colors);  

console.log("First Color:", colors[0]);     
console.log("Number of Colors:", colors.length);        
colors.push("Yellow");
console.log("Updated Colors:", colors);     
console.log("Number of Colors after push:", colors.length);
//8. Function (which is also a type of Object)
function greet() {
    return "Hello, World!";
}   
console.log("Greet Function:", greet);
console.log("Type of greet:", typeof greet);        
console.log("Calling Greet Function:", greet());
//9. Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);
console.log("Are sym1 and sym2 equal?", sym1 === sym2); 
console.log("Type of sym1:", typeof sym1);
//10. BigInt
let bigIntNum = BigInt(123456789012345678901234567890);
console.log("BigInt Number:", bigIntNum);   