/****************************************************************************
 * Sum All Primes                                                           *
 *                                                                          *
 * Sum all the prime numbers up to and including the provided number.       *
 * A prime number is defined as having only two divisors, 1 and itself.     *
 * For example, 2 is a prime number because it's only divisible by 1 and 2. *
 * 1 isn't a prime number, because it's only divisible by itself.           *
 * The provided number may not be a prime.                                  *
 ****************************************************************************/

 function sumPrimes(num) {
   var sum = 0;
   var sieve = [], i, j, primes = [];
   for (i = 2; i <= num; ++i) {
     if (!sieve[i]) {
       primes.push(i);
       for (j = i << 1; j <= num; j += i) {
         sieve[j] = true;
       }
     }
   }
   for (var x in primes) {
     sum += primes[x];
   }
   return sum;
 }
