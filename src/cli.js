import readLineSync from 'readline-sync';

const greeting = () => {
  const name = readLineSync.question('Welcome to the Brain Games!\nMay i have your name? ');
  return `Hello, ${name}!`;
};

export default greeting;
