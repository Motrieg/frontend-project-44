import readLineSync from 'readline-sync';

export const basicGame = (gameDescription, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  const roundCounter = 3;

  for (let i = 0; i < roundCounter; i += 1) {
    const [question, correctAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default basicGame;
