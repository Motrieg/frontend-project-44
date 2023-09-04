import { getRandomNumber, calculate } from '../math-operations.js';

const calculationGame = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operations = ['+', '-', '*'];
  const arithmeticOperation = operations[getRandomNumber(0, operations.length - 1)];

  const question = `${num1} ${arithmeticOperation} ${num2}`;
  const result = calculate(num1, num2, arithmeticOperation);

  return [question, result];
};

export default calculationGame;
