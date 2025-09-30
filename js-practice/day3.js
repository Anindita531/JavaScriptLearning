// day3.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter operation (+, -, *, /): ", (operation) => {
            let n1 = Number(num1);
            let n2 = Number(num2);
            let result;

            if (operation === "+") {
                result = n1 + n2;
            } else if (operation === "-") {
                result = n1 - n2;
            } else if (operation === "*") {
                result = n1 * n2;
            } else if (operation === "/") {
                result = n1 / n2;
            } else {
                result = "Invalid operation!";
            }

            console.log("Result: " + result);
            rl.close();
        });
    });
});

