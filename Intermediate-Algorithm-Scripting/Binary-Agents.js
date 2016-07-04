// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  var arr = str.split(" ");
  var word = '';
  for (var i in arr) {
    var temp = parseInt(arr[i], 2);
    word += String.fromCharCode(temp);
  }
  return word;
}
