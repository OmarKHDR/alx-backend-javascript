#!/usr/bin/node

module.exports = function displayMessage(str) {
  process.stdout.write(`${str}\n`);
};
