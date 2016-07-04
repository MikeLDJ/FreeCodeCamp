// Drop it
// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.
// The second argument, func, is a function you'll use to test the first
// elements of the array to decide if you should drop it or not.
// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  var loop = arr.length;
  for (var i = 0; i < loop; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// This in my first writen code, but it won't pass arguments below,
// And I can't figure it out why?

// function dropElements(arr, func) {
//   for (var i in arr) {
//     if (func(arr[0])) {
//       return arr;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// dropElements([1, 2, 3, 4], function(n) {return n > 5;});