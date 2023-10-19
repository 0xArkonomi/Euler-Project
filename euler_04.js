function isPalindrome(num) {
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
  }
  
  function findLargestPalindrome() {
    let largestPalindrome = 0;
    let factor1 = 0;
    let factor2 = 0;
  
    for (let i = 100; i < 1000; i++) {
      for (let j = 100; j < 1000; j++) {
        const product = i * j;
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
          factor1 = i;
          factor2 = j;
        }
      }
    }
  
    return { largestPalindrome, factor1, factor2 };
  }
  
  const result = findLargestPalindrome();
  console.log(`The largest palindrome is ${result.largestPalindrome} (which is ${result.factor1} x ${result.factor2}).`);
  