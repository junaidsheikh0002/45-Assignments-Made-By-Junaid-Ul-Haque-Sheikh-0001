typescript
Copy code
// index.ts

import { Calculator } from './Calculator';
import * as readline from 'readline-sync';

const calculator = new Calculator();

function main() {
    console.log("Welcome to the TypeScript Calculator!");

    const num1 = readline.questionFloat("Enter the first number: ");
    const num2 = readline.questionFloat("Enter the second number: ");
    const operation = readline.question("Enter the operation (+, -, *, /): ");

    try {
        let result: number;
        switch (operation) {
            case '+':
                result = calculator.add(num1, num2);
                break;
            case '-':
                result = calculator.subtract(num1, num2);
                break;
            case '*':
                result = calculator.multiply(num1, num2);
                break;
            case '/':
                result = calculator.divide(num1, num2);
                break;
            default:
                throw new Error("Invalid operation");
        }

        console.log(`The result of ${num1} ${operation} ${num2} is ${result}`);
    } catch (error) {
        console.error(error.message);
    }
}

main();