#!/usr/bin/node

const app = require('node:http');

module.exports = app.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
}).listen(1245);
