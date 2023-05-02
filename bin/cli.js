import readLineSync from 'readline-sync';
export const greeting = () => {
    var userName = readLineSync.question('May i have your name? ');
    console.log('Hello, ' + userName + '!');
};
