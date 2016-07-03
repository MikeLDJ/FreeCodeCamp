/****************************************************************
 * Roman Numeral Converter                                      *
 *                                                              *
 * Convert the given number into a roman numeral.               *
 * All roman numerals answers should be provided in upper-case. *
 ****************************************************************/

 function convert(num) {
   var arrArn = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
   var arrRoman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
   var numRoman = "";
   var temp = num+1;
   while (temp > 1) {
     for (var i = 0; i < arrArn.length; i++) {
       if (temp > arrArn[i] && temp <= arrArn[i+1]) {
         numRoman += arrRoman[i];
         temp -= arrArn[i];
       } else if (temp > 1000) {
         numRoman += "M";
         temp -= 1000;
       }
     }
   }
  return numRoman;
 }
