// Function to generate a Fibonacci sequence up to the specified limit
function generateFibonacci(endOfSequence) {
    const fibonacciArray = [0, 1];
    let previous = 0;
    let current = 1;

    while (current + previous <= endOfSequence) {
        const next = current + previous;
        fibonacciArray.push(next);
        previous = current;
        current = next;
    }

    return fibonacciArray;
}

const limit = 4000000; // Define the limit as 4,000,000 .
let sum = 0; // Initialize sum with zero

// Call the function to generate the Fibonacci sequence
const fibonacciArray = generateFibonacci(limit);

// Calculate the sum of even Fibonacci numbers
for (let i = 0; i < fibonacciArray.length; i++) {
    if (fibonacciArray[i] % 2 === 0) {
        sum += fibonacciArray[i];
    }
}

// Output the sum and the Fibonacci sequence
console.log(`The sum of even Fibonacci numbers not exceeding ${limit.toLocaleString()} is ${sum.toLocaleString()}`);
// console.log('Fibonacci sequence:', fibonacciArray);


// ------------- ↓ More straightforward solution ↓ -------------

// Function to calculate the sum of even Fibonacci numbers not exceeding the given 'limit'.
function evenFibonacciSum(limit) {
    let sum = 0;
    let previous = 1;        // Initialize the first Fibonacci number to 1.
    let current = 2;        // Initialize the second Fibonacci number to 2.
  
    while (previous <= limit) {  // Continue while the current Fibonacci number is less than or equal to the 'limit'.
      if (previous % 2 === 0) {  // Check if the current Fibonacci number is even.
        sum += previous;         // If even, add it to the sum.
      }
      [previous, current] = [current, previous + current]; // Use array destructuring to update 'previous' and 'current' with the next Fibonacci numbers.
    }
  
    return sum;  // Return the sum of even Fibonacci numbers.
  }
  
//   const limit = 4_000_000;
  const result = evenFibonacciSum(limit); 
  
  // Output the result with proper formatting using 'toLocaleString()' for better readability.
  console.log(`The sum of even Fibonacci numbers not exceeding ${limit.toLocaleString()} is ${result.toLocaleString()}`);
  