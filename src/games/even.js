import gameCore from '../index.js';
import getRndNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const level = 100;

const getExpression = () => {
  const a = getRndNumber(level);
  const correctAnswer = a % 2 === 0 ? 'yes' : 'no';
  return [`${a}`, `${correctAnswer}`];
};

export default function game() {
  gameCore(rules, getExpression);
}
