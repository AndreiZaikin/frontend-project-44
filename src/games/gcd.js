import gameCore from '../index.js';
import getRndNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const level = 20;

function getGsd(a, b) {
  if (b === 0) {
    return a;
  }
  return getGsd(b, a % b);
}

const getExpression = () => {
  const a = 1 + getRndNumber(level);
  const b = 1 + getRndNumber(level);
  return [`${a} ${b}`, `${getGsd(a, b)}`];
};

export default function game() {
  gameCore(rules, getExpression);
}
