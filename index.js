"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./Calculator");
const calculator = new Calculator_1.Calculator();
const a = 10;
const b = 5;
console.log(`${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`${a} - ${b} = ${calculator.subtract(a, b)}`);
console.log(`${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`${a} / ${b} = ${calculator.divide(a, b)}`);
