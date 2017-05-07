/**
  Given an array of N integers, can you find the sum of its elements?

  Input Format

  The first line contains an integer, N, denoting the size of the array. 
  The second line contains N space-separated integers representing the array's elements.

  Output Format

  Print the sum of the array's elements as a single integer.

  Sample Input

  6
  1 2 3 4 10 11
  
  Sample Output

  3
  https://www.hackerrank.com/challenges/simple-array-sum
 */

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  const answer = arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  return console.log(answer);
}
