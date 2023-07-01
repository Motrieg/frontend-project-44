import readLineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

export const basicGame = (gameQuestion, gameLogic) => {
  const getUserName = greeting();

  console.log(gameQuestion);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (typeof (correctAnswer) === 'number' && Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getUserName}!`);
};

export default basicGame;
