#!/usr/bin/env node
import readLineSync from 'readline-sync';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < 3;) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');

    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      i += 1;
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      i = 0;
    } else if (number % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      i = 0;
    } else console.log(`${answer} is incorrect answer. Let's try again`);
  }
  console.log(`Congratulations, ${userName}!`);
};

isEvenGame();

export default isEvenGame;
