Array.prototype.mergeSort = function() {
  var merge = function(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex++]);
      } else {
        result.push(right[rightIndex++]);
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  if (this.length < 2) {
    return this;
  }

  var middleIndex = Math.floor(this.length / 2);
  var left = this.slice(0, middleIndex);
  var right = this.slice(middleIndex)
  return merge(left.mergeSort(), right.mergeSort())
};

var testArray = [900, 400, 200, 100, 9872, 439];