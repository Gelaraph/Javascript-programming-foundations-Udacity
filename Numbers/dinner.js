/*
 * Programming Quiz: Out to Dinner
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`,
 *    and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be 
 *.   declared using the `const` keyword
 * 3. Your variable `bill` should be a number, having a value 
 *.   equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value
 */

 const bill = 10.25 + 3.99 + 7.15;
 const tip = bill * 0.15;
 const total = bill + tip;

 console.log('$' + total);