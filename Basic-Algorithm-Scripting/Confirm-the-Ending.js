/*****************************************************************************
 * Confirm the Ending                                                        *
 *                                                                           *
 * Check if a string (first argument, str) ends with the given target string *
 * (second argument, target).                                                *
 *****************************************************************************/

 function confirmEnding(str, target) {
   var str1 = str.replace(/[^A-Za-z0-9]/g,'');
   var targetLen = target.length;
   if (str1.substr(-(targetLen),targetLen) == target) {
     return true;
   }   
   return false;
 }
