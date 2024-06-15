"use strict";
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Alice", "David", "Chris", "Michel"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
let greatMagicians = make_great(magicians.slice());
console.log("Origional Magicians :");
show_magicians(magicians);
console.log("Great Magicians :");
show_magicians(greatMagicians);
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
function make_sandwich(...items) {
    console.log(`Making a sandwich with : ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(option => {
        const [key, value] = Object.entries(option)[0]; // Extracting key-value pair from the option
        car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", { color: "red" }, { year: 2020 }));
console.log(make_car("Ford", "Fiesta", { color: "blue" }, { sunroof: true }));
console.log(make_car("Mercedes", "Benz", { color: "Black" }, { year: 2022 }));
