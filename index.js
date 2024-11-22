function printPrimesBetween(n, m) {
    function isPrime(num) {
        if (num < 2) return false; // Prime numbers are greater than 1
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const primes = [];
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    console.log(primes.join(' '));
}

// Example usage:
printPrimesBetween(5, 10);  // Output: 5 7
printPrimesBetween(7, 20); // Output: 7 11 13 17 19


