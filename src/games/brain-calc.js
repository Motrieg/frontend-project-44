import brainGame from '../index.js';
import { getRandomNumber as randomNumber, defineCalculation } from '../math-operations.js';

const calculationGame = () => {
  const gameQuestion = 'What is the result of the expression?';

  const calculate = () => {
    const num1 = randomNumber(1, 10);
    const num2 = randomNumber(1, 10);
    const operations = ['+', '-', '*'];
    const defineOperation = operations[randomNumber(0, 3)];

    const question = `${num1} ${defineOperation} ${num2}`;
    const result = defineCalculation(num1, num2, defineOperation);

    return [question, result];
  };

  brainGame(gameQuestion, calculate);
};

export default calculationGame;
