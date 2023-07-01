import * as logic from '../src/index.js';

const isPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const randomNumber = logic.getRandomNumber();
    const isPrimeNumber = logic.isPrime(randomNumber);
    const correctAnswer = isPrimeNumber ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = logic.answerPromt();

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

export default isPrimeGame;
