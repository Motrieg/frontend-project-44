import readLineSync from 'readline-sync';
import greeting from './cli.js';

export const basicGame = (gameQuestion, gameLogic) => {
  const getUserName = greeting();

  console.log(gameQuestion);

  for (let i = 0; i < 3;) {
    const [question, correctAnswer] = gameLogic();
    console.log('Question: ', question);
    const userAnswer = readLineSync.question('Your answer: ');

    if (typeof (correctAnswer) === 'number' && Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is incorrect answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${getUserName}`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${getUserName}!`);
};

export default basicGame;
