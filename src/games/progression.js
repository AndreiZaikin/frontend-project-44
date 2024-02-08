import gameCore from '../index.js';

const rules = 'What number is missing in the progression?';
const level = 100;
const maxQty = 10;
const maxStep = 10;

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

const getExpression = () => {
  const minQty = 5;
  const a1 = Math.floor(Math.random() * level);
  const step = 1 + Math.floor(Math.random() * maxStep);
  const qty = minQty + Math.floor(Math.random() * (maxQty - minQty));
  const pos = Math.round(Math.random() * qty);
  return getProgression(a1, step, qty, pos);
};

export default function game() {
  gameCore(rules, getExpression);
}
