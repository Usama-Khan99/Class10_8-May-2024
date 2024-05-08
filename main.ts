// ternary operator (Other method of if else statement in a single line)

let isHungry = true;
let snack = isHungry? "apple": "water";

console.log(`You should have some ${snack}.`);

// switch statement 
// working on one value / variable (only use for checking equality, no less than or no greater than value check)

let dayOff = "Sunday";
switch(dayOff){

    case "Saturday":
        console.log("Go hiking.");;
        break;
    case "Sunday":
        console.log("Read a book.");
        break;
    default:
        console.log("Work on a hobby.");
        
}


// Functions 
// syntax of function 
// function functionname  (){

// }
// Functions are the fundamental building block of any application in java script 

// Basic Function 
// keyword     function name 
function greet(){
    console.log("Hello World");
    
}
greet();