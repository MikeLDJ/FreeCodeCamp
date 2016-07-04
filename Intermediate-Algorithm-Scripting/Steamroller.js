// Steamroller

// Flatten a nested array.
// You must account for varying levels of nesting.

function steamrollArray(arr) {
  var flatArr = [];
  function flat(n) {
    if (Array.isArray(n)) {
      for (var i = 0; i < n.length; i++) {
        flat(n[i]);
      }
    } else {
      flatArr.push(n);
    }
  }
  
  arr.forEach(flat);
  return flatArr;
}
