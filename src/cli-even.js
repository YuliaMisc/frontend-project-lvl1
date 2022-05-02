import readlineSync from 'readline-sync';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let num = 0;
  while (num <= 2) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      (randomNumber % 2 === 0 && answer === 'yes') ||
      (randomNumber % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
      num += 1;
    } else if (randomNumber % 2 === 0 && answer !== 'yes') {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`
      );
    } else if (randomNumber % 2 !== 0 && answer !== 'no') {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default parityCheck;
