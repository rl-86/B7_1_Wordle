/*
export function compareWords() {
  const matches = guess.map((char1) => {
    return secret.some((char2) => char1 === char2);
  });
  console.log(matches);
  return matches;
}
const secret = ['A', 'P', 'P', 'L', 'E'];
const guess = ['H', 'E', 'L', 'L', 'O'];
compareWords(guess, secret);
*/

export default function compareWords() {
  if (secret.every((element, index) => element === guess[index])) {
    console.log('Correct word!');
  } else {
    console.log('Incorrect word!');
  }
}

const secret = ['A', 'P', 'P', 'L', 'E'];
const guess = ['H', 'E', 'L', 'L', 'O'];
compareWords(guess, secret);

//secret.length === guess.length &&
