export default function compareWords(guess, secret) {
  if (secret.every((element, index) => element === guess[index])) {
    return 'Correct word!';
  } else {
    return 'Incorrect word!';
  }
}
let secret = [];
let guess = [];
compareWords(guess, secret);
/*
export function secretWord(secret) {
  let str1 = secret[0].toUpperCase().split('');
  console.log(secret);
  console.log(str1);
  return str1;
}

export function guessedWord() {
  let str2 = guess[0].toUpperCase().split('');
  return str2;
}

export function compareWords() {
  const matches = guess.map((char1) => {
    return secret.some((char2) => char1 === char2);
  });

  return matches;
}

// compareWords(guess, secret);
*/
