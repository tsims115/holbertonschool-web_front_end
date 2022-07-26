function countPrimeNumbers() {
  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return num > 1;
  }
let count = 0;
  for (let i = 2; i <=200; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
function calcPrimenumbers() {
  for(let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}

let t0 = performance.now();
setTimeout(calcPrimenumbers, 500);
let t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
