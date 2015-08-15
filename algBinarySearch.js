/** Binary Search
 * Find the index of a value given.
 * O(log(n)) runtime.
 */

Array.prototype.binarySearch = function(target) {
  var low = 0;
  var high = this.length - 1;
  var middle;
  while (low <= high) {
    middle = Math.floor(((high + low) / 2));
    if (this[middle] === target) {
      return middle
    } else if (this[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return "Index not found";
};

// Test

var testArray = [0, 6, 9, 12, 49, 50, 80, 800, 900];
testArray.binarySearch(900) // 8
testArray.binarySearch(10000) // "Index not found"