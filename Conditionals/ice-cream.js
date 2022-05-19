/*
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "Great choice! Your ice cream is at the next window."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "sugar cone" or "wafer cone"
 *   - topping is "sprinkles" or "peanuts"
 *
 * Otherwise log out:
 *
 * "Please check our menu and try again."
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `topping`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 
 */
 
// change the values of `flavor`, `topping`, and `vessel` to test your code
const flavor = "strawberry";
const topping = "sprinkles";
const vessel = "wafer cone";

// your code goes here
const flavorOK = flavor === "vanilla" || flavor === "chocolate";
const toppingOK = topping === "sprinkles" || topping === "peanuts";
const vesselOK = vessel === "sugar cone" || vessel === "wafer cone";

if ( flavorOK && toppingOK && vesselOK ) {
    console.log ("Great choice! Your ice cream is at the next window.");
} else {
    console.log ("Please check our menu and try again.");
}