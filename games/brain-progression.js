import * as logic from '../src/index.js';

const progressionGame = () => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3;) {
    const start = logic.getRandomNumber(1, 10);
    const step = logic.getRandomNumber(1, 10);
    const progression = [];
    progression[0] = start;

    for (let j = 0; j < 9; j += 1) {
      const nextNumber = progression[j] + step;
      progression.push(nextNumber);
    }
    const randomIndex = logic.getRandomNumber(1, progression.length - 1);
    const correctAnswer = progression[randomIndex];
    progression[randomIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
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

export default progressionGame;
/* 1.Определить стартовую точку массива прогрессии
2. Определить шаг прогрессии
3. Заполнить массив прогрессии числами
4. Выбрать случайный индекс и заменить его на ..
5. сравнить ответ пользователя с */
