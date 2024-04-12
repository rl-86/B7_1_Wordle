import { describe, expect, it } from '@jest/globals';
import { feedback } from './wordleAlgo.js';

// Testar feedback funktionen. De första två testerna var till för att se när skapandet av funktionen började fungera.
describe('feedback()', () => {
  it('should compare the two letters of the two words and return: correct', () => {
    const secretWord = 'b';
    const guessedWord = 'b';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([{ letter: 'B', result: 'correct' }]);
  });

  it('should compare the two letters of the two words and return incorrect ', () => {
    const secretWord = 'a';
    const guessedWord = 'b';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([{ letter: 'B', result: 'incorrect' }]);
  });

  // De två följande testerna är till för att se att funktionen fungerar som tänkt när det kommer fler av samma bokstäver. Kontrollera att första "B" får misplaced och det andra incorrect.
  it('should compare two variables and return the correct result: correct, incorrect or misplaced for each letter', () => {
    const secretWord = 'aba';
    const guessedWord = 'bab';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'B', result: 'misplaced' },
      { letter: 'A', result: 'misplaced' },
      { letter: 'B', result: 'incorrect' },
    ]);
  });

  // Detta för att kontrollera att det första "A" inte får misplaced utan incorrect.
  it('should compare two variables and return the correct result: correct, incorrect or misplaced for each letter (case 2)', () => {
    const secretWord = 'bba';
    const guessedWord = 'baa';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'correct' },
    ]);
  });

  // Detta testar ett verkligt senario där det hemliga order är "Apple" och det gissade ordet är "Hello" där resultatet ska vara en blandning av "misplaced", "incorrect"och "correct".
  it('should compare the letters of the two words and return correct, incorrect or misplaced for each letter', () => {
    const secretWord = 'apple';
    const guessedWord = 'hello';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'E', result: 'misplaced' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'L', result: 'correct' },
      { letter: 'O', result: 'incorrect' },
    ]);
  });

  // Detta testar att alla bokstäver får resultatet incorrect när inga bokstäver matchar.
  it('should compare the letters of the two words and return incorrect for each letter', () => {
    const secretWord = 'apple';
    const guessedWord = 'dizzy';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'D', result: 'incorrect' },
      { letter: 'I', result: 'incorrect' },
      { letter: 'Z', result: 'incorrect' },
      { letter: 'Z', result: 'incorrect' },
      { letter: 'Y', result: 'incorrect' },
    ]);
  });

  // Detta testar att alla bokstäver får resultatet correct när det gissade ordet är samma som hemliga ordet.
  it('should compare the letters of the two words and return correct for each letter', () => {
    const secretWord = 'apple';
    const guessedWord = 'apple';
    const output = feedback(secretWord, guessedWord);
    expect(output).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'E', result: 'correct' },
    ]);
  });
});
