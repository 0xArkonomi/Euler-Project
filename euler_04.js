// Function to check if a number is a palindrome
function isPalindrome(num) {
    const numStr = num.toString(); // Convert the number to a string
    return numStr === numStr.split('').reverse().join(''); // Check if it's the same forwards and backwards
  }
  
// Function to find the largest palindrome that's the product of two 3-digit numbers
function findLargestPalindrome(start, end) {
  let largestPalindrome = 0;
  let factor1 = 0;
  let factor2 = 0;

  // Nested loops to iterate through all 3-digit numbers
  for (let i = start; i < end; i++) {
    for (let j = start; j < end; j++) {
      const product = i * j; // Calculate the product of the numbers

      // Check if it's a palindrome and larger than the current largest palindrome
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product; // Update the largest palindrome
        factor1 = i; // Update the first factor
        factor2 = j; // Update the second factor
      }
    }
  }

  // Return the result as an object
  return { largestPalindrome, factor1, factor2 };
}
  
// Find the largest palindrome and its factors with a certain domain
const result = findLargestPalindrome(100, 1000);
 
// Display the result
console.log(`The largest palindrome is ${result.largestPalindrome} (which its factors are ${result.factor1} x ${result.factor2}).`);
  