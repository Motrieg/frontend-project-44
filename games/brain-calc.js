import * as logic from '../src/index.js';

const calculationGame = () => {
  console.log('What is the result of an expression?');

  for (let i = 0; i < 3;) {
    const num1 = logic.getRandomNumber();
    const num2 = logic.getRandomNumber();
    const sum = num1 + num2;
    console.log(`Question: ${num1} + ${num2}`);
    const answer = logic.answerPromt();

    if (Number(answer) === sum) {
      console.log(logic.correctAnswerMessage);
      i += 1;
    } else {
      logic.incorrecAnswerMessage(answer, sum);
      i = 0;
    }
  }
  console.log(logic.gameCompletion);
};

export default calculationGame;
