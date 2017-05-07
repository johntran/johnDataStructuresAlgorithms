/**
 * https://www.hackerrank.com/challenges/ctci-ransom-note
 * Given the words in the magazine and the words in the ransom note, 
 * print Yes if he can replicate his ransom note exactly using whole words from the magazine; 
 * otherwise, print No.
 */

function main() {
  var m_temp = readLine().split(' ');
  var m = parseInt(m_temp[0]);
  var n = parseInt(m_temp[1]);
  magazine = readLine().split(' ');
  ransom = readLine().split(' ');
  const magazineWords = magazine;
  const ransomWords = ransom;
  let magazineWordsTable = {};
  magazineWords.forEach(
    magazineWord =>
      (magazineWordsTable[magazineWord]
        ? (magazineWordsTable[magazineWord] =
            magazineWordsTable[magazineWord] + 1)
        : (magazineWordsTable[magazineWord] = 1))
  );
  const insufficient = ransomWords.some(ransomWord => {
    if (magazineWordsTable[ransomWord]) {
      if (magazineWordsTable[ransomWord] === 0) return true;
      magazineWordsTable[ransomWord] = magazineWordsTable[ransomWord] - 1;
      return false;
    }
    return true;
  });
  const answer = insufficient ? 'No' : 'Yes';
  return console.log(answer);
}
