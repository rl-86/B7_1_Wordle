export default function convertWord(inputWord) {
  let letterObjects = [];
  inputWord = inputWord.toUpperCase();
  for (let i = 0; i < inputWord.length; i++) {
    let letterObject = {
      letter: inputWord[i],
    };

    letterObjects.push(letterObject);
  }
  return letterObjects;
}

let wordObjects = convertWord('apple');
console.log(wordObjects);
