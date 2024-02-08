import gameCore from '../index.js';

function getPrime(a) {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return [`${a}`, 'no'];
    }
  }
  return [`${a}`, 'yes'];
}

function getExpression(level) {
  const a = 1 + Math.floor(Math.random() * level);
  return getPrime(a);
}

function getGameParameters(level, rounds) {
  const gameParameters = [];
  gameParameters.push('Answer "yes" if given number is prime. Otherwise answer "no".');
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
