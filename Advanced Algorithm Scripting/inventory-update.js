// Compare and update the inventory stored in a 2D array
// against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities
// (in arr1). If an item cannot be found, add the new
// item and quantity into the inventory array.
// The returned inventory array should be in alphabetical
// order by item.

function updateInventory(arr1, arr2) {

  var item;

  arr2.forEach(function(oldArr){

    item = 0;

    arr1.forEach(function(newArr){
      if (oldArr[1] === newArr[1]) {
        newArr[0] += oldArr[0];
        item = 1;
      }
    });

    if (!item) {
      arr1.push(oldArr);
    }
  });

  return arr1.sort(function(a,b){
    return a[1] > b[1];
  });
}
