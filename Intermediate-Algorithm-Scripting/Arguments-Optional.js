// Arguments Optional
// Create a function that sums two arguments together.
// If only one argument is provided, then return a function
// that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5,
// and addTogether(2) should return a function.
// Calling this returned function with a single argument will
// then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
  var sum = 0;
  
  function isNumber(x) {
    if (typeof x === 'number') {
      return true;
    } else {
      return false;
    }
  }
  
  if (arguments.length < 2) {
    if (isNumber(arguments[0])) {
      sum += arguments[0];
      return function(arg) {
        if (isNumber(arg)) {
          return sum + arg;
        }
      };
    } else {
      return undefined;
    }
  } else {
    for (var i in arguments) {
      if (isNumber(arguments[i])) {
        sum += arguments[i];
      } else {
        return undefined;
      }
    }
  }
  
  return sum;
}
