import brainGame from '../src/index.js';
import randomNumber from '../src/math-operations.js';

const isEvenGame = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = () => {
    const num = randomNumber();
    const question = `${num}`;
    const result = (num % 2 === 0) ? 'yes' : 'no';

    return [question, result];
  };

  brainGame(gameQuestion, isEven);
};

export default isEvenGame;
