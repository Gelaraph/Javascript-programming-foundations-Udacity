/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function (item, index) {
    if (item % 3 === 0) {
      test[index] = test[index] + 100;
    }
  });
  console.log(test);

//   Sometimes it helps to add console.log statements in your code to help you figure out the logic. This is what I did to help me work through the problem:
//   test.forEach(function (item, index) {
//     if (item % 3 === 0) {
//       console.log("Element at index " + index + " is divisible by 3");
//       test[index] = test[index] + 100;
//     } else {
//       console.log("Element " + item + " is not divisible by 3");
//     } 
//   });