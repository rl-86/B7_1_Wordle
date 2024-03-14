import { describe, expect, it } from '@jest/globals';
/*
import wordleAlgo from './wordleAlgo.js';

describe('wordleAlgo', () => {
  it('should return "Correct word!" if secret matches guess', () => {
    const secret = 'a';
    const guess = 'a';
    const output = wordleAlgo(secret, guess);
    expect(output).toBe('Correct word!');
  });

  it('should return "Incorrect word!" if secret does not matches guess', () => {
    const secret = 'a';
    const guess = 'ab';
    const output = wordleAlgo(secret, guess);
    expect(output).toBe('Incorrect word!');
  });
});
*/

import secretWord from './wordleAlgo.js';

describe('secretWord()', () => {
  it('should split the word into letters', () => {
    const output = secretWord(['apple']);
    expect(output).toEqual(['a', 'p', 'p', 'l', 'e']);
  });
});
