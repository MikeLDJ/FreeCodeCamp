// If multiple pairs are possible that have the same
// numeric elements but different indices, return the
// smallest sum of indices. Once an element has been
// used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns
// 6. The pairs that sum to 20 are [7, 13] and [9, 11].
// We can then write out the array with their indices
// and values.

function pairwise(arr, arg) {

  var arrShadow = arr.slice(),
      count = 0;

  for (var i = 0, j = arrShadow.length; i < j; i++) {
    for (var k = 1, l = arr.length; k < l; k++) {
      if (i !== k && arrShadow[i] !== undefined && arr [k] !== undefined && arrShadow[i] + arr[k] == arg) {
        count += i;
        count += k;
        arrShadow[i] = undefined;
        arrShadow[k] = undefined;
        arr[i] = undefined;
        arr[k] = undefined;
        break;
      }
    }
  }

  return count;
}
