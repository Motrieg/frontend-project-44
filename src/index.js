import readLineSync from 'readline-sync';
import greeting from './cli.js';

const getUserName = greeting(); // intro message and asking an user name input
const getRandomNumber = () => Math.floor(Math.random() * 100); // this will be in handy for RNG

const askingAnAnswer = () => { // asking user for an answer input
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};
const correctAnswerMessage = 'Correct!'; // used in case of correct user answer
const incorrecAnswerMessage = (userAnswer, correctAnswer) => { // in case of incorrect user answer
  console.log(`"${userAnswer}" is incorrect answer. Correct answer was "${correctAnswer}".\nLet's try again, ${getUserName}`);
};
const gameCompletion = `Congratulations, ${getUserName}!`; // message shown after game completion

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = askingAnAnswer();
    const correctAnswer = (number % 2) === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log(correctAnswerMessage);
      i += 1;
    } else {
      incorrecAnswerMessage(answer, correctAnswer);
      i = 0;
    }
  }
  console.log(gameCompletion);
};

export const calculationGame = () => {
  console.log('What is the result of an expression?');

  for (let i = 0; i < 3;) { // i think i can make adition a separate func but right now i'm tired :(
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const sum = num1 + num2;
    console.log(`Question: ${num1} + ${num2}`);
    const answer = askingAnAnswer();

    if (Number(answer) === sum) {
      console.log(correctAnswerMessage);
      i += 1;
    } else {
      incorrecAnswerMessage(answer, sum);
      i = 0;
    }
  }
  console.log(gameCompletion);
};

export default isEvenGame;
