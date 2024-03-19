import { describe, expect, it } from '@jest/globals';
//import wordleAlgo from './wordleAlgo.js';
import convertWord from './wordleAlgo.js';
import feedback from './wordleAlgo.js';

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

/*
describe('feedback()', () => {
  it('should compare the letters of the two words and return correct, incorrect or misplaced for each letter', () => {
    const secretWord = 'APPLE';
    const guessedWord = 'HELLO';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'E', result: 'missplaced' },
      { letter: 'L', result: 'missplaced' },
      { letter: 'L', result: 'correct' },
      { letter: 'O', result: 'incorrect' },
    ]);
  });

  it('should compare the letters of the two words and return correct for each letter', () => {
    const secretWord = 'APPLE';
    const guessedWord = 'APPLE';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'E', result: 'correct' },
    ]);
  });

  it('should compare the letters of the two words and return incorrect for each letter', () => {
    const secretWord = 'APPLE';
    const guessedWord = 'DIZZY';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'D', result: 'incorrect' },
      { letter: 'I', result: 'incorrect' },
      { letter: 'Z', result: 'incorrect' },
      { letter: 'Z', result: 'incorrect' },
      { letter: 'Y', result: 'incorrect' },
    ]);
  });
});

*/
