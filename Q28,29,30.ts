// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included

let favorite_food:string[] = ["banana","apple","melon"];

if(favorite_food.includes("banana")){
    console.log("I like banana!");   
}
if(favorite_food.includes("orange")){
    console.log("You like orange");    
}
if(favorite_food.includes("melon")){
    console.log("you like melons");  
}

// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usernames: string[] = ["admin", "user1", "user2", "admin", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});