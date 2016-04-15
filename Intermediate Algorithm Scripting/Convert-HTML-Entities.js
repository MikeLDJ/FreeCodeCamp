/*************************************************************************
 * Convert HTML Entities                                                 *
 *                                                                       *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), *
 * in a string to their corresponding HTML entities.                     *
 *************************************************************************/

 function convertHTML(str) {
   var arr = str.split('');
   for (var i in arr) {
     switch (arr[i]) {
       case '&':
         arr[i] = '&amp;';
         break;
       case '<':
         arr[i] = '&lt;';
         break;
       case '>':
         arr[i] = '&gt;';
         break;
       case '"':
         arr[i] = '&quot;';
         break;
       case '\'':
         arr[i] = '&apos;';
         break;
     }
   }
   arr = arr.join('');

   return arr;
 }
