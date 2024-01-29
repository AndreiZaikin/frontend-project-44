#!/usr/bin/env node
import ask from '../src/cli.js';

const texts = [];
texts.push('Welcome to the Brain Games!');
texts.push('May I have your name? ');

const [tWelcome, tName] = texts;

console.log(tWelcome);
const name = ask(tName);
console.log(`Hello, ${name}!`);
