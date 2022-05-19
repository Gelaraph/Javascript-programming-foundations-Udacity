/*
 * Programming Quiz: Even or Odd
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
 
 
// change the value of `number` to test your if...else statement
const number = 2;

// your code goes here
// Using a strict equality operator === checks the equality of operands without type conversion.
if (0 === number % 2) {
    console.log("Even")
    
} else {
    console.log("Odd")
}
