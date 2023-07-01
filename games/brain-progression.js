import brainGame from '../src/index.js';
import randomNumber from '../src/math-operations.js';

const progressionGame = () => {
  const gameQuestion = 'What number is missing in the progression?';

  const createProgression = () => {
    const start = randomNumber(1, 10);
    const step = randomNumber(1, 10);
    const progression = [];
    progression[0] = start;

    for (let i = 0; i < 9; i += 1) {
      const nextNumber = progression[i] + step;
      progression.push(nextNumber);
    }
    const randomIndex = randomNumber(1, progression.length - 1);
    const hiddenNumber = progression[randomIndex];
    progression[randomIndex] = '..';

    const question = `${progression.join(' ')}`;

    return [question, hiddenNumber];
  };

  brainGame(gameQuestion, createProgression);
};

export default progressionGame;
