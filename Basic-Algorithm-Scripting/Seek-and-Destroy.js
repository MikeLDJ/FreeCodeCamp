/**************************************************************************
 * Seek and Destroy                                                       *
 *                                                                        *
 * You will be provided with an initial array                             *
 * (the first argument in the destroyer function),                        *
 * followed by one or morearguments. Remove all elements from the initial *
 * array that are of the same value as these arguments.                   *
 **************************************************************************/

 function destroyer(arr) {
   var myArr = arguments;
   function temp(x) {
     return x != myArr[i];
   }
   for (var i = 1; i < arguments.length; i++) {
     arr = arr.filter(temp);
   }
   return arr;
 }
