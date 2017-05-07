/**
 * https://www.hackerrank.com/challenges/ctci-balanced-brackets
 * Given n strings of brackets, determine whether each sequence of brackets is balanced. 
 * If a string is balanced, print YES on a new line; otherwise, print NO on a new line.
 */
function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var expression = readLine();
    const characters = expression.split('');
    const ends = { ')': '(', '}': '{', ']': '[' };
    const starts = { '(': true, '{': true, '[': true };
    let queue = [];
    const unbalanced = characters.some((character, index) => {
      if (starts[character]) {
        queue.push(character);
        if (index === characters.length - 1) return true;
        return false;
      }
      const endChar = ends[character];
      if (queue.length === 0) return true;
      if (queue[queue.length - 1] === endChar) {
        queue.pop();
        return false;
      }
      return true;
    });
    const answer = unbalanced ? 'NO' : 'YES';
    console.log(answer);
  }
}
