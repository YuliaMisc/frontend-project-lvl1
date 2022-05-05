import runСommonLogic from '../index.js';
import getRandomNumber from '../get-random.js';

const rulesOfTheGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getResultOperation = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return NaN;
};

const buildRound = () => {
  const operator = operators[getRandomNumber(0, operators.length)];
  const numberOne = getRandomNumber(0, 25);
  const numberTwo = getRandomNumber(0, 25);
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const correctAnswer = String(getResultOperation(numberOne, numberTwo, operator));
  return [question, correctAnswer];
};

export default () => {
  runСommonLogic(rulesOfTheGame, buildRound);
};

