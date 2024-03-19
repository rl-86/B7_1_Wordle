export default function convertWord(inputWord) {
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

let secretWord = 'apple';
let guessedWord = 'hello';

let secretObjects = convertWord(secretWord);
console.log(secretWord, ':', secretObjects);

let guessedObjects = convertWord(guessedWord);
console.log(guessedWord, ':', guessedObjects);

export function feedback(secretObjects, guessedObjects) {
  const feedbackArray = [];
}
