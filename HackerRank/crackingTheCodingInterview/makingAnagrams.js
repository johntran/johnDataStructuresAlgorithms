/**
 * https://www.hackerrank.com/challenges/ctci-making-anagrams
 * Given two strings, a and b, that may or may not be of the same length, 
 * determine the minimum number of character deletions required to make a and b anagrams. 
 * Any characters can be deleted from either of the strings.
 */
function main() {
  var a = readLine();
  var b = readLine();
  const aList = a.split('');
  const bList = b.split('');
  const total = aList.length + bList.length;
  let pair = 0;
  aList.forEach(aNode =>
    bList.some((bNode, index) => {
      if (aNode === bNode) {
        bList.splice(index, 1);
        pair++;
        return true;
      }
      return false;
    })
  );
  const answer = total - pair * 2;
  console.log(answer);
}
