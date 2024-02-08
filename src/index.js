import readlineSync from 'readline-sync';

const rounds = 3;

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

export default function core(rules, getExpression) {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(rules);

  const questionPairs = [];
  for (let i = 0; i < rounds; i += 1) {
    questionPairs.push(getExpression());
  }

  const result = makeTest(questionPairs);
  if (result === true) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
