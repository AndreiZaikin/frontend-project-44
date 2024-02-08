import gameCore from '../index.js';
import getRndNumber from '../utils.js';

const rules = 'What is the result of the expression?';
const level = 100;

const getExpression = () => {
  const a = getRndNumber(level);
  const b = getRndNumber(level);
  const action = 1 + getRndNumber(2);
  switch (action) {
    case 1: return [`${a} + ${b}`, `${a + b}`];
    case 2: return [`${a} - ${b}`, `${a - b}`];
    case 3: return [`${a} * ${b}`, `${a * b}`];
    default: return ['', 0];
  }
};

export default function game() {
  gameCore(rules, getExpression);
}
