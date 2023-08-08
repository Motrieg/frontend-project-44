import brainGame from '../index.js';
import { getRandomNumber, isPrime } from '../math-operations.js';

const isPrimeGame = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const definePrime = () => {
    const num = getRandomNumber();
    const question = `${num}`;
    const result = isPrime(num) ? 'yes' : 'no';

    return [question, result];
  };

  brainGame(gameQuestion, definePrime);
};

export default isPrimeGame;
