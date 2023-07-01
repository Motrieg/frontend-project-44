import readLineSync from 'readline-sync';

const greeting = () => {
  const userName = readLineSync.question('May i have your name? ');
  return userName;
};

export default greeting;
