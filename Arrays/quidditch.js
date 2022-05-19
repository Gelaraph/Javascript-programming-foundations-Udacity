/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */

// your code goes here
function hasEnoughPlayers(arrayInstance) {
    if (arrayInstance.length >= 7) {
        return true; // true is a boolean value. Do not return a string "true"
   } else {
        return false; // false is also a boolean value. Do not return a string "false"
   }
}


// test code
const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];
console.log(hasEnoughPlayers(team1)); // should be true
console.log(hasEnoughPlayers(team2)); // should be false
console.log(hasEnoughPlayers(team3)); // should be false
console.log(hasEnoughPlayers(team4)); // should be true
