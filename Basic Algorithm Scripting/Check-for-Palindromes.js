/*****************************************************************************
 * Check for Palindromes                                                     *
 *                                                                           *
 * Return true if the given string is a palindrome. Otherwise, return false. *
 * A palindrome is a word or sentence that's spelled the same way both       *
 * forward and backward, ignoring punctuation, case, and spacing.            *
 * Note                                                                      *
 * You'll need to remove all non-alphanumeric characters (punctuation,       *
 * spaces and symbols) and turn everything lower casein order                *
 * to check for palindromes.                                                 *
 * We'll pass strings with varying formats, such as "racecar", "RaceCar",    *
 * and "race CAR" among others.                                              *
 *****************************************************************************/

 function palindrome(str) {
   var str1 = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
   var myArray = str1.split('').reverse();
   var strRev = myArray.join('');
   if (str1 == strRev) {
     return true;
   }
   return false;
 }

 palindrome("a B 433c,de");