/*
 * Programming Quiz - Checking Your Balance
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
const balance = 325.00;
const checkBalance = true;
const isActive = false;

// your code goes here

// Start only if the checkBalance === true;
if(checkBalance === true){
    // If the account is active:
    if(isActive === true && checkBalance > 0){
    console.log("Your balance is $" + balance + ".");
}else if (isActive === true && balance === 0){
    console.log("Your account is empty");
} else if (isActive == true && balance < 0){
    console.log("Your balance is negative. Please contact bank");
}
// Case when the account is not active
else if (isActive === false){
    console.log("Your account is no longer active");
}
}else{
    console.log("Thank yu. Have a nice day!");
}