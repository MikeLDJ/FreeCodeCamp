/****************************************************************************
 *  ## TIME SERVER (Exercise 10 of 13)                                      *
 *                                                                          *
 * Write a TCP time server!                                                 *
 *                                                                          *
 * Your server should listen to TCP connections on the port provided by the *
 * first argument to your program. For each connection you must write the   *
 * current date & 24 hour time in the format:                               *
 *                                                                          *
 *   "YYYY-MM-DD hh:mm"                                                     *
 *                                                                          *
 * followed by a newline character. Month, day, hour and minute must be     *
 * zero-filled to 2 integers. For example:                                  *
 *                                                                          *
 *   "2013-07-06 17:42"                                                     *
 *                                                                          *
 * After sending the string, close the connection.                          *
 ****************************************************************************/

 var net = require('net');
 function zeroPrefix(digit) {
     if (digit < 10) {
         return '0' + digit;
     } else {
         return digit;
     }
 }
 function dateNow() {
     var date = new Date();
     return date.getFullYear() + '-' +
         zeroPrefix(date.getMonth() + 1) + '-' +
         zeroPrefix(date.getDate()) + ' ' +
         zeroPrefix(date.getHours()) + ':' +
         zeroPrefix(date.getMinutes());
 }
 var server = net.createServer(function(socket) {
     socket.end(dateNow() + '\n');
 });
 server.listen(process.argv[2]);
