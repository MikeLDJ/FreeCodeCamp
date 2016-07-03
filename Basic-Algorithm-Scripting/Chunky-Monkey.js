/*********************************************************************************
 * Chunky Monkey                                                                 *
 *                                                                               *
 * Write a function that splits an array (first argument) into groups the length *
 * of size (second argument) and returns them as a two-dimensional array.        *
 *********************************************************************************/

 function chunk(arr, size) {
   var temp = [];
   for (var i = 0; i < arr.length / size; i++) {
   var arrTemp = arr.slice(size * i, size * i + size);
     temp.push(arrTemp);
   }
   return temp;
 }
