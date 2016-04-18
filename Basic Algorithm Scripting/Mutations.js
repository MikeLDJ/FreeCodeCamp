/*****************************************************************************
 * Mutations                                                                 *
 *                                                                           *
 * Return true if the string in the first element of the array contains      *
 * all of the letters of the string in the second element of the array.      *
 * For example, ["hello", "Hello"], should return true because all of        *
 * the letters in the second string are present in the first, ignoring case. *
 * The arguments ["hello", "hey"] should return false because the string     *
 * "hello" does not contain a "y".                                           *
 * Lastly, ["Alien", "line"], should return true because all of the letters  *
 * in "line" are present in "Alien".                                         *
 *****************************************************************************/

 function mutation(arr) {
   var arr1 = [];
   var bol = true;
   for (var i = 0; i < 2; i++) {
     var temp = arr[i].toLowerCase();
     arr1.push(temp);
   }
   for (var j = 0; j < arr1[1].length; j++) {
     if (arr1[0].indexOf(arr1[1][j]) >= 0) {
       bol = bol && true;
     } else {
       bol = bol && false;
     }
   }
   return bol;
 }
