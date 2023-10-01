//
let start = 1;

//
const end = 4_000_000; 

//
let sum = 0;

function setFibonacci(endOfSequence) {
    let array = [];
    let sum = 0;
    let current = 1;
    let previous = 0;
    for (let i = 1; i < end; i++) {
        sum = previous + current;
        array.push(sum);
        previous = sum;
        current++;
    }
    return array;
}

let array = setFibonacci(end);

//
while (start < end) {
    if (array[start-1] % 2 == 0)
        sum += start;
    start++;
}

console.log(sum);
console.log(array);