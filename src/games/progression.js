import gameCore from '../index.js';

function getProgression(a1, step, qty, pos) {
  const arr = [];
  let ai = 0;
  let correctAnswer = 0;
  for (let i = 0; i <= qty; i += 1) {
    ai = a1 + step * i;
    if (i === pos) {
      correctAnswer = ai;
      ai = '..';
    }
    arr.push(`${ai}`);
  }
  return [arr.join(' '), `${correctAnswer}`];
}

function getExpression(level, maxQty, maxStep) {
  const minQty = 5;
  const a1 = Math.floor(Math.random() * level);
  const step = 1 + Math.floor(Math.random() * maxStep);
  const qty = minQty + Math.floor(Math.random() * (maxQty - minQty));
  const pos = Math.round(Math.random() * qty);
  return getProgression(a1, step, qty, pos);
}

function getGameParameters(level, rounds, maxQty, maxStep) {
  const gameParameters = [];
  gameParameters.push('What number is missing in the progression?');
  const questionPairs = [];
  for (let i = 0; i < rounds; i += 1) {
    questionPairs.push(getExpression(level, maxQty, maxStep));
  }
  gameParameters.push(questionPairs);
  return gameParameters;
}

export default function game(level = 100, rounds = 3, maxQty = 10, maxStep = 10) {
  gameCore(getGameParameters(level, rounds, maxQty, maxStep));
}
