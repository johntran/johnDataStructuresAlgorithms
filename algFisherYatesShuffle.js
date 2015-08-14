/** Given an array, guarantee
 * each element is shuffled once
 * O(n) runtime
 */
Array.prototype.shuffle = function() {
  var remainingElements = this.length;
  var helper;
  var target;
  while (remainingElements) {
    target = Math.floor(Math.random()*remainingElements--);
    helper = this[remainingElements];
    this[remainingElements] = this[target];
    this[target] = helper;
  }
}↵