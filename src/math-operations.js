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

export default getRandomNumber;
