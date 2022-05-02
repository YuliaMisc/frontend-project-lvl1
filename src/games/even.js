import gamesEngine from '../index.js';
import randomNumber from '../get-random.js';

const rulesOfTheGame =
  'Answer "yes" if the number is even, otherwise answer "no".';

const checkForParity = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
const buildRound = () => {
  const randomNum = randomNumber(0, 100);
  const question = `${randomNum}`;
  const correctAnswer = checkForParity(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const parityCheck = () => {
  gamesEngine(rulesOfTheGame, buildRound);
};

export default parityCheck;
