/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

// Let row represents a sub-array
for (let row = 0; row < numbers.length; row++) {
    // Let col represents the length of a sub-array
    for (col = 0; col < numbers[row].length; col++ ) {
      if (numbers[row][col] % 2 === 0) numbers[row][col] = 'even';
      else numbers[row][col] = 'odd';
    }
  }
  
  // Print the final array
  console.log(numbers);