/********************************************************************************
 * Boo who                                                                      *
 *                                                                              *
 * Check if a value is classified as a boolean primitive. Return true or false. *
 * Boolean primitives are true and false.                                       *
 ********************************************************************************/

 function boo(bool) {
   if (typeof bool === "boolean") {
     return true;
   }
   return false;
 }
