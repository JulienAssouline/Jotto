export function getLetterMatchCount(guessedWord, secretWord) {
  const guessedLetterSet = new Set(guessedWord.split(""));
  const secretLetterSet = secretWord.split("");

  return secretLetterSet.filter(letter => guessedLetterSet.has(letter)).length;
}
