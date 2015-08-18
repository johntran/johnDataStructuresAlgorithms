Array.prototype.quickSort = function(left, right) {
  var swap = function(collection, first, second) {
    var helper = collection[first];
    collection[first] = collection[second];
    collection[second] = helper;
  };

  var partition = function(collection, left, right) {
    var pivot = collection[Math.floor((left + right) / 2)];
    while (left <= right) {
      while (collection[left] < pivot) {
        left++;
      }
      while (collection[right] > pivot) {
        right--;
      }
      if (left <= right) {
        swap(collection, left, right);
        left++;
        right--;
      }
    }
    return left;
  };

  var index;
  if (this.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? this.length - 1 : right;
    index = partition(this, left, right);
  }

  if (left < index - 1) {
    this.quickSort(left, index - 1);
  }

  if (right > index) {
    this.quickSort(index, right);
  }
  
  return this;
};

var testArray = [5, 3, 4, 6, 7, 10];
