// main.js

// Import named exports
import { greet, today } from "./utils.js";

// Import default export
import add from "./utils.js";

console.log(greet("Anindita"));
console.log(`Today is ${today}`);
console.log(`2 + 3 = ${add(2, 3)}`);

