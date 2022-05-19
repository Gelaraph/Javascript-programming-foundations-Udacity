/*
 * Programming Quiz: Laugh
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

// your code goes here
// Declare an empty string
let sound = "" ; 

// An anonymous function expression stored in the variable `laugh`
const laugh = function(num) {

    //Iterate
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
};


// testing your code
console.log(laugh(1));
console.log(laugh(5));
console.log(laugh(10));