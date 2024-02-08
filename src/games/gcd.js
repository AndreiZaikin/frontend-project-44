import gameCore from '../index.js';

function getGsd(a, b) {
  if (b === 0) {
    return a;
  }
  return getGsd(b, a % b);
}

function getExpression(level) {
  const a = 1 + Math.floor(Math.random() * level);
  const b = 1 + Math.floor(Math.random() * level);
  return [`${a} ${b}`, `${getGsd(a, b)}`];
}

function getGameParameters(level, rounds) {
  const gameParameters = [];
  gameParameters.push('Find the greatest common divisor of given numbers.');
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
