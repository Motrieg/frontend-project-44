import { getRandomNumber, calculate } from '../math-operations.js';

const calculationGame = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operations = ['+', '-', '*'];
  const defineOperation = operations[getRandomNumber(0, 3)];

  const question = `${num1} ${defineOperation} ${num2}`;
  const result = calculate(num1, num2, defineOperation);

  return [question, result];
};

export default calculationGame;
