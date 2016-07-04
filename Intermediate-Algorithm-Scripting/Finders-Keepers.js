// Finders Keepers

// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth
// test (second argument).

function findElement(arr, func) {
  var num;
  for (var i in arr) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  return num;
}
