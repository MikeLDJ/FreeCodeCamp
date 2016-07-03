// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters 
// that can be evenly divided by both, as well as by all sequential 
// numbers in the range between these parameters.
// The range will be an array of two numbers 
// that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
// that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  
  var sumArr = [];
  
  for (var i = arr[0]; i >= arr[1]; i--) {
    sumArr.push(i);
  }
  
  var quotient = 0;
  var loop = 1;
  var j;
  
  do {
    quotient = sumArr[0] * loop * sumArr[1];
    for (n = 2; n < sumArr.length; n++) {
      if (quotient % sumArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== sumArr.length);
  
  return quotient;
}
