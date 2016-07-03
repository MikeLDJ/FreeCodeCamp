/*******************************************************************************
 *  ## BABY STEPS (Exercise 2 of 13)                                           *
 *                                                                             *
 *  Write a program that accepts one or more numbers as command-line arguments *
 *  and prints the sum of those numbers to the console (stdout).               *
 *******************************************************************************/

 var myArr = process.argv.slice(2);
 var sum = 0;
 for (var i in myArr) {
     sum += Number(myArr[i]);
 }
 console.log(sum);
