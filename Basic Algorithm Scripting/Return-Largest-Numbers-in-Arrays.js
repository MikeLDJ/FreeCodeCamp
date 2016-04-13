/***********************************************************************
 * Return Largest Numbers in Arrays                                    *
 *                                                                     *
 * Return an array consisting of the largest number from each provided *
 * sub-array. For simplicity, the provided array will contain exactly  *
 * 4 sub-arrays.                                                       *
 * Remember, you can iterate through an array with a simple for loop,  *
 * and access each member with array syntax arr[i].                    *
 ***********************************************************************/

 function largestOfFour(arr) {
   var finalArray = [];
   for (var i = 0; i < arr.length; i++) {
     var tempArr = arr[i].sort(function(a,b){return b-a;});
     finalArray.push(tempArr[0]);
     }

   return finalArray;
 }

 largestOfFour([[4, 5, 1, 3, 4, 9, 9], [13, 27, 18, 26, 88, 101, 122, 12, 44, 33, 33, 2222, 33], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
