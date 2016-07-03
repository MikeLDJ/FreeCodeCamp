/*******************************************************************************
 * Diff Two Arrays                                                             *
 *                                                                             *
 * Compare two arrays and return a new array with any items only found in one  *
 * of the two given arrays, but not both. In other words, return the symmetric *
 * difference of the two arrays.                                               *
 *******************************************************************************/

 function diff(arr1, arr2) {
   var newArr = arr1;
   function temp(x) {
     return x != arr2[i];
   }
   for (var i = 0; i < arr2.length; i++) {
     newArr = newArr.filter(temp);
     if (arr1.indexOf(arr2[i]) < 0) {
       newArr = newArr.concat(arr2[i]);
     }
   }
   return newArr;
 }
