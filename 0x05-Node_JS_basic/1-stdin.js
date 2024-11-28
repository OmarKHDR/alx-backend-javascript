#!/usr/bin/node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.on('close', () => {
  console.log('This important software is now closing');
});

console.log('Welcome to Holberton School, what is your name?');
rl.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});
