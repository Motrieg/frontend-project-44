import readLineSync from 'readline-sync';

const greeting = () => readLineSync.question('May i have your name? ');

export default greeting;
