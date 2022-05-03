import generalGameLogic from '../index.js';
import randomNumber from '../get-random.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (number) => {
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
  const randomNum = randomNumber(0, 100);
  const question = `${randomNum}`;
  const correctAnswer = checkPrimeNumber(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeNumber = () => {
  generalGameLogic(rulesOfTheGame, buildRound);
};

export default primeNumber;
