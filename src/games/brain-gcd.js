import brainGame from '../index.js';
import { getRandomNumber, getGcd } from '../math-operations.js';

const gcdGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';

  const gcdCalculation = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    const result = getGcd(num1, num2);

    return [question, result];
  };

  brainGame(gameQuestion, gcdCalculation);
};

export default gcdGame;
