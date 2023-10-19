// Function to check if a number is a palindrome
function isPalindrome(num) {
    const numStr = num.toString(); // Convert the number to a string
    return numStr === numStr.split('').reverse().join(''); // Check if it's the same forwards and backwards
  }
  
  // Function to find the largest palindrome that's the product of two 3-digit numbers
  function findLargestPalindrome() {
    let largestPalindrome = 0;
    let factor1 = 0;
    let factor2 = 0;
  
    // Nested loops to iterate through all 3-digit numbers
    for (let i = 100; i < 1000; i++) {
      for (let j = 100; j < 1000; j++) {
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
  
  // Find the largest palindrome and its factors
  const result = findLargestPalindrome();
  
  // Display the result
  console.log(`The largest palindrome is ${result.largestPalindrome} (which is ${result.factor1} x ${result.factor2}).`);
  