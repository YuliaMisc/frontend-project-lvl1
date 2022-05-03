import generalGameLogic from '../index.js';
import randomNumber from '../get-random.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a < b) {
    return nod(a, b - a);
  }
  return nod(a - b, b);
};
const buildRound = () => {
  const randomNumOne = randomNumber(0, 100);
  const randomNumTwo = randomNumber(0, 100);
  const question = `${randomNumOne} ${randomNumTwo}`;
  const correctAnswer = String(nod(randomNumOne, randomNumTwo));
  return [question, correctAnswer];
};

const getCommonDivisor = () => {
  generalGameLogic(rulesOfTheGame, buildRound);
};

export default getCommonDivisor;
