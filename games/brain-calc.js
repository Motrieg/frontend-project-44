import brainGame from '../src/index.js';
import randomNumber from '../src/math-operations.js';

const calculationGame = () => {
  const gameQuestion = 'What is the result of the expression?';

  const calculate = () => {
    const num1 = randomNumber(1, 10);
    const num2 = randomNumber(1, 10);
    const operations = ['+', '-', '*'];
    const defineOperation = operations[randomNumber(0, 3)];

    const question = `${num1} ${defineOperation} ${num2}`;

    let result = 0;
    switch (defineOperation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }

    return [question, result];
  };

  brainGame(gameQuestion, calculate);
};

export default calculationGame;
