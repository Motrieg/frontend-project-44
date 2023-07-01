import readLineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greeting;
