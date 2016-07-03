/*******************************************************************************
 * Sum All Numbers in a Range                                                  *
 *                                                                             *
 * We'll pass you an array of two numbers. Return the sum of those two numbers *
 * and all numbers between them.                                               *
 * The lowest number will not always come first.                               *
 *******************************************************************************/

 function sumAll(arr) {
   var max = Math.max(...arr);
   var mix = Math.min(...arr);
   var sum = 0;
   for (var i = mix; i <= max; i++) {
     sum += i;
   }
   return sum;
 }
