// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzas :string [] = ["fajita","pepparoni","malai boti","tikka","margherita"];

pizzas.forEach(pizza => {
    console.log(`i like ${pizza} pizza.`);
});
console.log("i really love pizza!\n");

// Question 35: Animals: Highlight animals with a common trait.

let animals : string []= ["dog","cat","parrot"];
animals.forEach(animal => {
    console.log(`A ${animal} would be a great pet.`);
    
});
console.log(`Any of these animals would be a grat pet!!\n`);

// Question 36: T-Shirt: Create a function for customizing t-shirts

function make_shirt(size:string, message:string){
    console.log(`Make a ${size} sized t-shirt with a message "${message}" printed on it.`);
    
}
make_shirt("medium","Code is easy");