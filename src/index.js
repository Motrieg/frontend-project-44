import readLineSync from 'readline-sync';
import greeting from './cli.js';

export const getUserName = greeting(); // intro message and asking an user name input
export const getRandomNumber = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};
export const getGcd = (n1, n2) => {
  let x = Math.abs(n1);
  let y = Math.abs(n2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const answerPromt = () => {
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};

export const correctAnswerMessage = 'Correct!';

export const incorrecAnswerMessage = (userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is incorrect answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName}`);
};

export const gameCompletion = `Congratulations, ${getUserName}!`;

export default getUserName;
