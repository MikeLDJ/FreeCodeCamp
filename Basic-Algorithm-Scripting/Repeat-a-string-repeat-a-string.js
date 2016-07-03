/***********************************************************************
 * Repeat a string repeat a string                                     *
 *                                                                     *
 * Repeat a given string (first argument) num times (second argument). *
 * Return an empty string if num is a negative number.                 *
 ***********************************************************************/

 function repeat(str, num) {
   if (num<1) {str = "";}
   var tempStr = "";
   for (var i = num; i > 0; i--) {
     tempStr += str;
   }
   return tempStr;
 }
