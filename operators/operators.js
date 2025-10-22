//Different types of Operators in JavaScript
//1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); // Exponentiation
console.log("++a =", ++a); // Pre-increment
console.log("b-- =", b--); // Post-decrement
console.log("New value of b after post-decrement:", b);
//2. Assignment Operators
let c = 5;
c += 2; // c = c + 2
console.log("c after c += 2:", c);
c *= 3; // c = c * 3
console.log("c after c *= 3:", c);
c -= 4; // c = c - 4
console.log("c after c -= 4:", c);
c /= 2; // c = c / 2
console.log("c after c /= 2:", c);
c %= 3; // c = c % 3
console.log("c after c %= 3:", c);
c **= 2; // c = c ** 2
console.log("c after c **= 2:", c);
//3. Comparison Operators
let x = 10;
let y = "10";
console.log("x == y:", x == y); // Equality
console.log("x === y:", x === y); // Strict Equality
console.log("x != y:", x != y); // Inequality
console.log("x !== y:", x !== y); // Strict Inequality
console.log("x > 5:", x > 5);
console.log("x < 15:", x < 15);
console.log("x >= 10:", x >= 10);
console.log("x <= 9:", x <= 9);
//4. Logical Operators
let p = true;
let q = false;
console.log("p && q:", p && q); // Logical AND
console.log("p || q:", p || q); // Logical OR
console.log("!p:", !p); // Logical NOT
//5. String Operators
let str1 = "Hello, ";
let str2 = "World!";
let str3 = str1 + str2;
console.log("Concatenated String:", str3);
console.log("String with += operator:");
str1 += str2;
console.log(str1);
//6. Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Can vote:", canVote);
//7. Typeof Operator
console.log("Type of a:", typeof a);
console.log("Type of str3:", typeof str3);
console.log("Type of p:", typeof p);

//8. Nullish Coalescing Operator
let nullVar = null;
let undefinedVar = undefined;
console.log("Type of undefined variable:", typeof undefinedVar);
let defaultValue = "Default Value";
console.log("nullVar ?? defaultValue:", nullVar ?? defaultValue);
console.log("undefinedVar ?? defaultValue:", undefinedVar ?? defaultValue);
//9. Optional Chaining Operator
let user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};  
console.log("User's city:", user.address?.city);
console.log("User's country:", user.address?.country);
console.log("User's phone number:", user.contact?.phoneNumber);
//10. Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log("m & n (AND):", m & n); // 0001 => 1
console.log("m | n (OR):", m | n); // 0111 => 7
console.log("m ^ n (XOR):", m ^ n); // 0110 => 6
console.log("~m (NOT):", ~m); // -6 (inverts bits)
console.log("m << 1 (Left Shift):", m << 1); // 1010 => 10
console.log("m >> 1 (Right Shift):", m >> 1); // 0010 => 2
console.log("m >>> 1 (Unsigned Right Shift):", m >>> 1); // 0010 => 2
//11. Comma Operator
let commaResult = (1 + 2, 3 + 4);
console.log("Result of comma operator (1+2, 3+4):", commaResult); // Outputs 7
//12. Exponentiation Operator
let base = 2;
let exponent = 3;
console.log("base ** exponent =", base ** exponent); // 2^3 = 8
//13. Void Operator
let voidResult = void(0);
console.log("Result of void operator (void(0)):", voidResult);
//14. Delete Operator
let obj = { prop1: "value1", prop2: "value2" };
console.log("Object before deletion:", obj);
delete obj.prop1;
console.log("Object after deleting prop1:", obj);