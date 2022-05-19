/*
 * Programming Quiz: Murder Mystery
 */

/*
 * QUIZ REQUIREMENTS
* QUIZ REQUIREMENTS
 * 1. Your code should have four variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output when the case is solved: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 */


/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

const room = "billiards room";
const suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "";
let solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'kitchen') {
    weapon = "knife";
    // Mr. Parkes was present in the kitchen at the time of the murder
    if(suspect === 'Mr Parkes')
    solved = true;
    
} else if (room === "ballroom") {
    weapon = 'poison'
    // Mr. Kalehoff was present in the ballroom at the time of the murder
    if(suspect === 'Mr Kalehoff')
    solved = true;
    
} else if (room === 'billiards room') {
    weapon = 'pool stick';
    // Mrs. Sparr was present in the billiards room at the time of the murder
    if(suspect==="Mrs. Sparr") 
        solved = true;
    
} else { 
    weapon = 'trophy';
     // Ms. Van Cleve was present in the gallery at the time of the murder
     if (suspect === 'Ms. Van Cleve')
     solved = true;
    
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
  console.log("The case is not solved!")
}
/* ****************************************** */
