export const getRandomNumber = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export const getGcd = (n1, n2) => {
  let x = Math.abs(n1);
  let y = Math.abs(n2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const calculate = (num1, num2, arithmeticOperation) => {
  let result = 0;
  switch (arithmeticOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'Please pass an arithmetic sign to define an operation ';
  }
  return result;
};

export const isEven = (num) => num % 2 === 0;

export const createProgression = (start, step, length) => {
  const progression = [];
  progression[0] = start;

  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

export default getRandomNumber;
