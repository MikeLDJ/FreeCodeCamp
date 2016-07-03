/***************************************************************************
 * Slasher Flick                                                           *
 *                                                                         *
 * Return the remaining elements of an array after chopping off n elements *
 * from the head.                                                          *
 * The head means the beginning of the array, or the zeroth index.         *
 ***************************************************************************/

 function slasher(arr, howMany) {
   arr = arr.slice(howMany);
   return arr;
 }
