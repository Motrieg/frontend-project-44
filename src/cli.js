import readLineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  readLineSync.question('May i have your name? ');
};

export default greeting;
