// Secret Word:
let secretWord = 'apple';
// Guessed Word:
let guessedWord = 'apple';

export function convertWord(inputWord) {
  const letterObjects = [];
  inputWord = inputWord.toUpperCase();
  for (let i = 0; i < inputWord.length; i++) {
    let letterObject = {
      letter: inputWord[i],
    };

    letterObjects.push(letterObject);
  }
  return letterObjects;
}

const secretObjects = convertWord(secretWord);
const guessedObjects = convertWord(guessedWord);

export default function feedback() {
  const feedbackResult = [];
  const secretLetters = secretObjects.map((obj) => obj.letter);
  const letterCounts = {};

  secretLetters.forEach((letter) => {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  });

  for (let i = 0; i < guessedObjects.length; i++) {
    const guessedLetter = guessedObjects[i].letter;

    if (secretLetters[i] === guessedLetter) {
      feedbackResult.push({ letter: guessedLetter, result: 'correct' });
      letterCounts[guessedLetter]--;
    } else if (letterCounts[guessedLetter] > 0) {
      feedbackResult.push({ letter: guessedLetter, result: 'misplaced' });
      letterCounts[guessedLetter]--;
    } else {
      feedbackResult.push({ letter: guessedLetter, result: 'incorrect' });
    }

    if (letterCounts[guessedLetter] < 0) {
      feedbackResult.find(
        (obj) => obj.letter === guessedLetter && obj.result === 'misplaced'
      ).result = 'incorrect';
    }
  }
  //console.log('Your guess:', guessedWord.toUpperCase(), feedbackResult);
  return feedbackResult;
}
feedback(secretObjects, guessedObjects);

/*
const secretObjects = [
  { letter: 'C' },
  { letter: 'O' },
  { letter: 'R' },
  { letter: 'R' },
  { letter: 'E' },
  { letter: 'C' },
  { letter: 'T' },
];
const guessedObjects = [
  { letter: 'C' },
  { letter: 'O' },
  { letter: 'R' },
  { letter: 'E' },
  { letter: 'C' },
  { letter: 'T' },
  { letter: 'O' },
];
feedback(secretObjects, guessedObjects);
*/
