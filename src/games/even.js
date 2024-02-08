import gameCore from '../index.js';

function getExpression(level) {
  const a = Math.round(Math.random() * level);
  const correctAnswer = a % 2 === 0 ? 'yes' : 'no';
  return [`${a}`, `${correctAnswer}`];
}

function getGameParameters(level, rounds) {
  const gameParameters = [];
  gameParameters.push('Answer "yes" if the number is even, otherwise answer "no".');
  const questionPairs = [];
  for (let i = 0; i < rounds; i += 1) {
    questionPairs.push(getExpression(level));
  }
  gameParameters.push(questionPairs);
  return gameParameters;
}

export default function game(level = 100, rounds = 3) {
  gameCore(getGameParameters(level, rounds));
}
