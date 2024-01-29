import readlineSync from 'readline-sync';

export default function ask(question) {
  return readlineSync.question(question);
}
