import * as logic from '../src/index.js';

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const randomNumber = logic.getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = logic.answerPromt();
    const correctAnswer = (randomNumber % 2) === 0 ? 'yes' : 'no';

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
