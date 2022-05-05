import runСommonLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const getRandomProgression = (randomNum, increaseOn, progressionLength) => {
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(i * randomNum + increaseOn);
  }
  return progression;
};

const buildRound = () => {
  const number = getRandomNumber(0, 10);
  const increaseOn = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = getRandomProgression(number, increaseOn, progressionLength);
  const hiddenElement = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runСommonLogic(rulesOfTheGame, buildRound);
};
