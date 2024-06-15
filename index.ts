// index.ts

import { Calculator } from './Calculator';

const calculator = new Calculator();

const a = 10;
const b = 5;

console.log(`${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`${a} - ${b} = ${calculator.subtract(a, b)}`);
console.log(`${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`${a} / ${b} = ${calculator.divide(a, b)}`);