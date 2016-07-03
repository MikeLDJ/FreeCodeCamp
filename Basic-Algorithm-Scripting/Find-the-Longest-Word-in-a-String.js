/*******************************************************************
 * Find the Longest Word in a String                               *
 *                                                                 *
 * Return the length of the longest word in the provided sentence. *
 * Your response should be a number.                               *
 *******************************************************************/

 function findLongestWord(str) {
   var strLen = 0;
   var myArray = str.split(" ");
   for (var i = 0; i < myArray.length; i++) {
     if (myArray[i].length > strLen) {
       strLen = myArray[i].length;
     }
   }

   return strLen;
 }

 findLongestWord("The quick brown fox jumped over the lazy dogggggggg");
