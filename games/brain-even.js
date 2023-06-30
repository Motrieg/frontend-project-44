import * as logic from '../src/index.js';

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const number = logic.getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = logic.answerPromt();
    const correctAnswer = (number % 2) === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log(logic.correctAnswerMessage);
      i += 1;
    } else {
      logic.incorrecAnswerMessage(answer, correctAnswer);
      i = 0;
    }
  }
  console.log(logic.gameCompletion);
};

export default isEvenGame;
