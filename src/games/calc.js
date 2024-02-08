import gameCore from '../index.js';

function getExpression(level) {
  const a = Math.round(Math.random() * level);
  const b = Math.round(Math.random() * level);
  const action = 1 + Math.round(Math.random() * 2);
  switch (action) {
    case 1: return [`${a} + ${b}`, `${a + b}`];
    case 2: return [`${a} - ${b}`, `${a - b}`];
    case 3: return [`${a} * ${b}`, `${a * b}`];
    default: return ['', 0];
  }
}

function getGameParameters(level, rounds) {
  const gameParameters = [];
  gameParameters.push('What is the result of the expression?');
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
