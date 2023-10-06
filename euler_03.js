// Problem 3: Largest Prime Factor
// The prime factors of 13195 are 5, 7, 13, and 29. What is the largest prime factor of a given number?

function sieveOfEratosthenes(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;
  
    for (let p = 2; p * p <= limit; p++) {
      if (sieve[p]) {
        for (let i = p * p; i <= limit; i += p) {
          sieve[i] = false;
        }
      }
    }
  
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  function largestPrimeFactor(number) {
    const primes = sieveOfEratosthenes(Math.floor(Math.sqrt(number)));
    let largestPrime = 0;
  
    for (const prime of primes) {
      if (number % prime === 0) {
        largestPrime = prime;
        while (number % prime === 0) {
          number /= prime;
        }
      }
    }
  
    if (number > 1) {
      largestPrime = number;
    }
  
    return largestPrime;
  }
  
  const targetNumber = 600851475143; // You can replace this with any number you want to find the largest prime factor for.
  const result = largestPrimeFactor(targetNumber);
  console.log("The largest prime factor is:", result);
  