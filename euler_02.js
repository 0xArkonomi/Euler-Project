//
let start = 0;

//
const end = 4000000; 

//
let sum = 0;

function setFibonacci(endOfSequence) {
    let array = [];
    let sum = 0;
    let current = 1;
    let previous;
    for (let i = 1; i < end; i++) {
        previous = sum;
        sum += current;
        array.push(sum);
        current = previous;
    }
    return array;
}   

let array = setFibonacci(end);

//
while (array[start] < end) {
    if (array[start] % 2 == 0)
        sum += start;
    start++;
}

console.log(sum);
console.log(array);