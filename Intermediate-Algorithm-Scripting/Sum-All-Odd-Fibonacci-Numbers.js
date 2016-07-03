/******************************************************************************
 * Sum All Odd Fibonacci Numbers                                              *
 *                                                                            *
 * Return the sum of all odd Fibonacci numbers up to and including the passed *
 * number if it is a Fibonacci number.                                        *
 * The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8,   *
 * and each subsequent number is the sum of the previous two numbers.         *
 * As an example, passing 4 to the function should return 5 because all       *
 * the odd Fibonacci numbers under 4 are 1, 1, and 3.                         *
 ******************************************************************************/

 function sumFibs(num) {
   var fibo = [1, 1];
   var sum = 0;
   while (fibo[fibo.length-1] + fibo[fibo.length-2] <= num) {
     fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
   }
   for (var i in fibo) {
     if (fibo[i] % 2 === 1) {
       sum += fibo[i];
     }
   }
   console.log(fibo);
   return sum;
 }
