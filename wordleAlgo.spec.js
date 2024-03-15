import { describe, expect, it } from '@jest/globals';
import wordleAlgo from './wordleAlgo.js';
import secretWord from './wordleAlgo.js';
import guessedWord from './wordleAlgo.js';
import compareWords from './wordleAlgo.js';

describe('compareWords()', () => {
  it('should compare guess with secret and return "Correct word!" if secret matches guess', () => {
    const secret = ['A', 'P', 'P', 'L', 'E'];
    const guess = ['A', 'P', 'P', 'L', 'E'];
    const output = compareWords(guess, secret);
    expect(output).toBe('Correct word!');
  });

  it('should compare guess with secret and return "Incorrect word!" if secret doesnt match guess', () => {
    const secret = ['A', 'P', 'P', 'L', 'E'];
    const guess = ['H', 'E', 'L', 'L', 'O'];
    const output = compareWords(secret, guess);
    expect(output).toBe('Incorrect word!');
  });
});

/*
describe('secretWord()', () => {
  it('should split the secret word into letters and make them uppercase', () => {
    const secret = ['aPPle'];
    const output = secretWord(secret);
    expect(output).toEqual(['A', 'P', 'P', 'L', 'E']);
  });
});

describe('guessedWord()', () => {
  it('should split the guessed word into letters and make them uppercase', () => {
    const guess = ['Hello'];
    const output = guessedWord(guess);
    expect(output).toEqual(['H', 'E', 'L', 'L', 'O']);
  });
});

describe('compareWords()', () => {
  it('should compare letters of both words and return an array of letters that match, true or false', () => {
    const secret = ['A', 'P', 'P', 'L', 'E'];
    const guess = ['H', 'E', 'L', 'L', 'O'];
    const output = compareWords(guess, secret);
    expect(output).toEqual([false, true, true, true, false]);
  });
});
*/
