import gameCore from '../index.js';
import getRndNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const level = 100;

function getPrime(a) {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return [`${a}`, 'no'];
    }
  }
  return [`${a}`, 'yes'];
}

const getExpression = () => {
  const a = 2 + getRndNumber(level);
  return getPrime(a);
};

export default function game() {
  gameCore(rules, getExpression);
}
