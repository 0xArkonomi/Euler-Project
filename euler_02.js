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

