/****************************************************************************
 * Pig Latin                                                                *
 *                                                                          *
 * Translate the provided string to pig latin.                              *
 * Pig Latin takes the first consonant (or consonant cluster) of an English *
 * word, moves it to the end of the word and suffixes an "ay".              *
 * If a word begins with a vowel you just add "way" to the end.             *
 ****************************************************************************/

 function translate(str) {
   var vowelArray = ["a", "e", "i", "o", "u"];
   var strArray = str.split('');
   var newStrArray = str.split('');

   for (var i in newStrArray) {
     if (vowelArray.includes(newStrArray[0])) {
       if (newStrArray[0] === strArray[0]) {
         newStrArray.push("way");
         return newStrArray.join('');
       } else {
         newStrArray.push("ay");
         return newStrArray.join('');
       }
     } else {
       newStrArray.push(newStrArray.shift());
     }
   }
   return newStrArray.join('');
 }
