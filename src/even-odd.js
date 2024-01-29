import readlineSync from 'readline-sync';

export default function game(rounds = 3, range = 100) {
  const texts = [];
  texts.push('Welcome to the Brain Games!');
  texts.push('May I have your name? ');
  texts.push('Answer "yes" if the number is even, otherwise answer "no".');
  texts.push('Congratulations, Bill!');

  const [tWelcome, tName, tEvenOdd] = texts;

  console.log(tWelcome);
  const name = readlineSync.question(tName);
  console.log(`Hello, ${name}!`);
  console.log(tEvenOdd);
  for (let i = 0; i < rounds; i += 1) {
    const num = Math.round(Math.random() * range);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
}
