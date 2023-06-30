import * as logic from '../src/index.js';

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3;) {
    const num1 = logic.getRandomNumber();
    const num2 = logic.getRandomNumber();
    const correctAnswer = logic.getGcd(num1, num2);
    console.log(correctAnswer);
    console.log(`Question: ${num1} ${num2}`);
    const answer = logic.answerPromt();

    if (Number(answer) === correctAnswer) {
      console.log(logic.correctAnswerMessage);
      i += 1;
    } else {
      logic.incorrecAnswerMessage(answer, correctAnswer);
      i = 0;
    }
  }
  console.log(logic.gameCompletion);
};

export default gcdGame;
