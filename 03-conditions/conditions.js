//Conditional if-else 
let age = 17;
if (age >= 18) {
    console.log("You are an ADULT");
}
else {
    console.log("minor age");
}
//if-else-if ladder
let score = 85;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else {
    console.log("Grade D");
}
//Switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");   
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);
//Nested if
let num = 10;
if (num > 0) {
    if (num % 2 === 0) {    
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else {
    console.log("Non-positive number");
}
//Logical operators
let a = 5;
let b = 10;
if (a > 0 && b > 0) {
    console.log("Both numbers are positive");
}
if (a > 0 || b > 0) {  
    console.log("At least one number is positive");
}
if (!(a < 0)) {
    console.log("a is not negative");
}
//Switch with strings
let fruit = "apple";
switch (fruit) {
    case "apple":   
        console.log("Apple pie");
        break;          
    case "banana":
        console.log("Banana split");
        break;  
    case "orange":
        console.log("Orange juice");
        break;
    default:
        console.log("Unknown fruit");
}   
//Nested switch
let vehicleType = "car";
let carType = "sedan";  
switch (vehicleType) {
    case "car":
        switch (carType) {  
            case "sedan":
                console.log("You selected a sedan car");
                break;  
            case "suv":
                console.log("You selected an SUV car");
                break;  
            default:
                console.log("Unknown car type");
        }       
        break;
    case "bike":
        console.log("You selected a bike"); 
        break;
    default:
        console.log("Unknown vehicle type");
}   

//If with multiple conditions
let temperature = 25;   
if (temperature > 30) {
    console.log("It's hot outside");
}       
else if (temperature >= 20 && temperature <= 30) {  
    console.log("It's warm outside");
}       
else {  
    console.log("It's cold outside");   
}   
//Switch with fall-through
let month = 2;  
switch (month) {    
    case 1:
    case 2:
    case 3:
        console.log("It's the first quarter of the year");          
        break;
    case 4:
    case 5:     
    case 6:
        console.log("It's the second quarter of the year");          
        break;
    case 7:
    case 8:
    case 9:
        console.log("It's the third quarter of the year");          
        break;
    case 10:
    case 11:
    case 12:
        console.log("It's the fourth quarter of the year");          
        break;
    default:
        console.log("Invalid month");
}


