import generalGameLogic from '../index.js';
import randomNumber from '../get-random.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const getRandomProgression = (randomNum, increaseOn, arrLength) => {
  const progression = [];
  for (let i = 1; i < arrLength; i += 1) {
    progression.push(i * randomNum + increaseOn);
  }
  return progression;
};

const buildRound = () => {
  const randomNum = randomNumber(0, 10);
  const increaseOn = randomNumber(1, 10);
  const arrLength = 11;
  const progression = getRandomProgression(randomNum, increaseOn, arrLength);
  const hiddenElement = [randomNumber(0, 9)];
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const getProgression = () => {
  generalGameLogic(rulesOfTheGame, buildRound);
};

export default getProgression;
