import readlineSync from 'readline-sync';

function getName() {
  const welcomeText = 'Welcome to the Brain Games!\nMay I have your name? ';
  return readlineSync.question(welcomeText);
}

function makeTest(questionPairs) {
  for (let i = 0; i < questionPairs.length; i += 1) {
    const [questionText, correctAnswer] = questionPairs[i];
    const answer = readlineSync.question(`Question: ${questionText}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
}

export default function core(GameParameters) {
  const name = getName();
  console.log(`Hello, ${name}!`);

  const [rules, questionPairs] = GameParameters;
  console.log(rules);
  const result = makeTest(questionPairs);
  if (result === true) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
