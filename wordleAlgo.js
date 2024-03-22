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

export function feedback(secretObjects, guessedObjects) {
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

  return feedbackResult;
}

/*
// To manually run the algorithm and console.log the results
function runWordleAlgo() {
  // Secret Word:
  let secretWord = 'radio';
  // Guessed Word:
  let guessedWord = 'train';

  const secretObjects = convertWord(secretWord);
  const guessedObjects = convertWord(guessedWord);
  feedback(secretObjects, guessedObjects);

  const guessResult = feedback(secretObjects, guessedObjects);

  console.log('Your guess:', guessedWord.toUpperCase());
  console.log(guessResult);
}

runWordleAlgo();
*/
