import generalGameLogic from '../index.js';
import randomNumber from '../get-random.js';

const rulesOfTheGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operatorСheck = (num1, num2, operator) => {
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
  const randomOperator = operators[randomNumber(0, operators.length)];
  const randomNumberOne = randomNumber(0, 25);
  const randomNumberTwo = randomNumber(0, 25);
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const correctAnswer = String(
    operatorСheck(randomNumberOne, randomNumberTwo, randomOperator)
  );
  return [question, correctAnswer];
};

const calculator = () => {
  generalGameLogic(rulesOfTheGame, buildRound);
};

export default calculator;
