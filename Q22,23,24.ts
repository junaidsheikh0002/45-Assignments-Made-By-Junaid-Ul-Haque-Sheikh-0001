
// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
 let friends : string[] = ["Ali","Umer","Musa"];

 console.log(friends[1]);
 friends[0] = "Zia";
 console.log(friends);
 console.log("");
 
 
//  Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let car = 'supra';

console.log("Is car == 'supra'? I predict True.");
console.log(car == 'supra'); // True

console.log("Is car == 'Nissan'? I predict False.");
console.log(car == 'Nissan'); // False

car = 'Cultus';

console.log("Is car == 'Cultus'? I predict True.");
console.log(car == 'Cultus'); // True

console.log("Is car == 'Mehran'? I predict False.");
console.log(car == 'Mehran'); // False

car = 'Mercedes Benz';

console.log("Is car == 'Mercedes Benz'? I predict True.");
console.log(car == 'Mercedes Benz');// True

console.log("Is car == 'Rolls Royes'? I predict False.");
console.log(car == 'Rolls Royes'); // False

car = 'Mark X';

console.log("Is car == 'Mark X'? I predict True.");
console.log(car == 'Mark X');// True

console.log("Is car == 'Ferrari'? I predict False.");
console.log(car == 'Ferrari'); // False

car = 'lamborginhi';

console.log("Is car == 'lamborginhi'? I predict True.");
console.log(car == 'lamborginhi');// True

console.log("Is car == 'Volks Wagon'? I predict False.");
console.log(car == 'Volks Wagon'); // False
console.log("");


// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("Apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
