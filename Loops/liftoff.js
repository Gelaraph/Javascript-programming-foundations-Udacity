/*
 * Programming Quiz: Countdown, Liftoff!
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output
 */

// your code goes here

// Let us take an iteration variable, that represent the remaining Time in seconds
let n = 60

// While loop with a stop condition
while (n >= 0) {
    if (n === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if (n === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (n === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (n === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (n === 6) {
        console.log("Main engine start");
    }
    else if (n === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else{
        console.log("T-"+n+" seconds");
    }

    //Never forget to decrement/increment the iteration variable in a while loop
    // Otherwise, you loop will run infinite iterations
    n = n-1;
}