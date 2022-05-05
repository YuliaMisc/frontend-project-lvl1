import runСommonLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
const buildRound = () => {
  const number = getRandomNumber(0, 100);
  const question = `${number}`;
  const correctAnswer = isParity(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => {
  runСommonLogic(rulesOfTheGame, buildRound);
};
