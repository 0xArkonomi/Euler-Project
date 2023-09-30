// Define constants for the range of natural numbers
const start = 1;
const end = 1000;

// Define an array of multiples to check
const multiples = [3, 5];

// Initialize the sum
let sum = 0;

// Iterate through the numbers within the specified range
for (let number = start; number < end; number++) {
    // Check if the number is a multiple of any in the 'multiples' array
    if (isMultiple(number, multiples)) {
        sum += number;
    }
}

// Output the result
console.log(sum);

// Function to check if a number is a multiple of any in the 'multiples' array
function isMultiple(number, multiplesArray) {
    for (const multiple of multiplesArray) {
        if (number % multiple === 0) {
            return true;
        }
    }
    return false;
}