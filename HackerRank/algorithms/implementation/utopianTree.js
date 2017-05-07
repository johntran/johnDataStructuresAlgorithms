/*
  The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

  Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after growth cycles?
  Output Format

  For each test case, print the height of the Utopian Tree after  cycles. Each height must be printed on a new line.

  Sample Input

    3
    0
    1
    4
  https://www.hackerrank.com/challenges/utopian-tree
*/

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    var result = 1;
    for (var i = 1; i < n + 1; i++) {
      if (i % 2) {
        result = result * 2;
      } else {
        result += 1;
      }
    }
    console.log(result);
  }
}
