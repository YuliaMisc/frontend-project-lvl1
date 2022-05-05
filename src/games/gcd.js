import runСommonLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a < b) {
    return getGcd(a, b - a);
  }
  return getGcd(a - b, b);
};

const buildRound = () => {
  const numberOne = getRandomNumber(0, 100);
  const numberTwo = getRandomNumber(0, 100);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(getGcd(numberOne, numberTwo));
  return [question, correctAnswer];
};

export default () => {
  runСommonLogic(rulesOfTheGame, buildRound);
};

