import runСommonLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRound = () => {
  const number = getRandomNumber(0, 100);
  const question = `${number}`;
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runСommonLogic(rulesOfTheGame, buildRound);
};
