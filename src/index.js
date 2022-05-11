import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (rulesOfTheGame, buildRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rulesOfTheGame);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = buildRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);

};
