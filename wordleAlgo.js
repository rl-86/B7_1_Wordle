/*
export default function wordleAlgo(str1, str2) {
  if (str1 === str2) {
    return 'Correct word!';
  } else if (str1 !== str2) {
    return 'Incorrect word!';
  }
  return str1, str2;
}
*/
export default function secretWord(secret) {
  const str1 = secret[0].split('');
  console.log(secret);
  console.log(str1);
  return str1;
}
