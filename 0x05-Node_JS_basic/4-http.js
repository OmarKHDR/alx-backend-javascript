#!/usr/bin/node

const http = require('node:http');

const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.writeHead(200);
  res.write(Buffer.from(responseText));
  res.end()
}).listen(1245);

module.exports = app;
