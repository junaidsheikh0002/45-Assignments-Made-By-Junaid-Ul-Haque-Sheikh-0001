"use strict";
// Question 37:Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "i like typescript") {
    console.log(`Making a ${size} sized t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "coding is easy");
// Question 38: Cities: Describing cities with a function.
// Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.
function describe_cities(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_cities("karachi");
describe_cities("lahore");
describe_cities("tokyo", "Japan");
describe_cities("delhi", "India\n");
// Question 39: City Names: Formatting city-country pairs.
// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("lahore", "Pakistan"));
console.log(city_country("delhi", "India"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
