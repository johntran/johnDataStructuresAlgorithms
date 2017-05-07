/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation
 * Given an array of n integers and a number, d, perform d left rotations on the array. Then print the updated array as a single line of space-separated integers.
 */

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);
  const answer = [...a.slice(k), ...a.slice(0, k)].reduce(
    (acc, curr) => `${acc} ${curr}`
  );
  console.log(answer);
}
