import readlineSync from 'readline-sync';

const calculator = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let num = 0;
  while (num <= 2) {
    const operator = ['+', '-', '*'];
    const getOperatorRandom = (arr) => {
      const i = Math.floor(Math.random() * operator.length);
      return arr[i];
    };
    const randomNumberOne = Math.round(Math.random() * 25);
    const randomNumberTwo = Math.round(Math.random() * 25);
    const operatorRandom = getOperatorRandom(operator);
    const result = `${randomNumberOne} ${operatorRandom} ${randomNumberTwo}`;

    let number = 0;
    if (operatorRandom === '+') {
      number += randomNumberOne + randomNumberTwo;
    } else if (operatorRandom === '-') {
      number += randomNumberOne - randomNumberTwo;
    } else if (operatorRandom === '*') {
      number += randomNumberOne * randomNumberTwo;
    }

    console.log(`Question: ${result}`);
    const answer = readlineSync.question('Your answer: ');

    if (number === Number(answer)) {
      console.log('Correct!');
      num += 1;
    } else if (number !== answer) {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${number}'. Let's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default calculator;
