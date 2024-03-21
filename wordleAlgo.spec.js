import { describe, expect, it } from '@jest/globals';
import { convertWord } from './wordleAlgo.js';
import { feedback } from './wordleAlgo.js';

// Testing convertWord()
describe('convertWord()', () => {
  it('should convert all letters of the word into individual objects and make them uppercase', () => {
    const secretWord = 'apple';
    const output = convertWord(secretWord);
    expect(output).toEqual([
      { letter: 'A' },
      { letter: 'P' },
      { letter: 'P' },
      { letter: 'L' },
      { letter: 'E' },
    ]);
  });

  it('should return the same number of letters as the input word', () => {
    const secretWord = 'orange';
    const output = convertWord(secretWord);
    expect(output).toHaveLength(6);
  });
});

// Testing feedback()
describe('feedback()', () => {
  it('should compare the two letters of the two words and return: correct', () => {
    const secretObjects = [{ letter: 'B' }];
    const guessedObjects = [{ letter: 'B' }];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([{ letter: 'B', result: 'correct' }]);
  });

  it('should compare the two letters of the two words and return incorrect ', () => {
    const secretObjects = [{ letter: 'A' }];
    const guessedObjects = [{ letter: 'B' }];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([{ letter: 'B', result: 'incorrect' }]);
  });

  it('should compare two variables and return the correct result: correct, incorrect or misplaced for each letter', () => {
    const secretObjects = [{ letter: 'A' }, { letter: 'B' }, { letter: 'A' }];
    const guessedObjects = [{ letter: 'B' }, { letter: 'A' }, { letter: 'B' }];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([
      { letter: 'B', result: 'misplaced' },
      { letter: 'A', result: 'misplaced' },
      { letter: 'B', result: 'incorrect' },
    ]);
  });

  it('should compare two variables and return the correct result: correct, incorrect or misplaced for each letter (case 2)', () => {
    const secretObjects = [{ letter: 'B' }, { letter: 'B' }, { letter: 'A' }];
    const guessedObjects = [{ letter: 'B' }, { letter: 'A' }, { letter: 'A' }];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'correct' },
    ]);
  });

  it('should compare the letters of the two words and return correct, incorrect or misplaced for each letter', () => {
    const secretObjects = [
      { letter: 'A' },
      { letter: 'P' },
      { letter: 'P' },
      { letter: 'L' },
      { letter: 'E' },
    ];
    const guessedObjects = [
      { letter: 'H' },
      { letter: 'E' },
      { letter: 'L' },
      { letter: 'L' },
      { letter: 'O' },
    ];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'E', result: 'misplaced' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'L', result: 'correct' },
      { letter: 'O', result: 'incorrect' },
    ]);
  });

  it('should compare the letters of the two words and return incorrect for each letter', () => {
    const secretObjects = [
      { letter: 'A' },
      { letter: 'P' },
      { letter: 'P' },
      { letter: 'L' },
      { letter: 'E' },
    ];
    const guessedObjects = [
      { letter: 'D' },
      { letter: 'I' },
      { letter: 'Z' },
      { letter: 'Z' },
      { letter: 'Y' },
    ];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([
      { letter: 'D', result: 'incorrect' },
      { letter: 'I', result: 'incorrect' },
      { letter: 'Z', result: 'incorrect' },
      { letter: 'Z', result: 'incorrect' },
      { letter: 'Y', result: 'incorrect' },
    ]);
  });

  it('should compare the letters of the two words and return correct for each letter', () => {
    const secretObjects = [
      { letter: 'A' },
      { letter: 'P' },
      { letter: 'P' },
      { letter: 'L' },
      { letter: 'E' },
    ];
    const guessedObjects = [
      { letter: 'A' },
      { letter: 'P' },
      { letter: 'P' },
      { letter: 'L' },
      { letter: 'E' },
    ];
    const output = feedback(secretObjects, guessedObjects);
    expect(output).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'E', result: 'correct' },
    ]);
  });
});
