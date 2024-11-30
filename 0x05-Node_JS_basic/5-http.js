#!/usr/bin/node

const fs = require('fs').promises;

function findDiffFields(arr) {
  const field = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    field.add(arr[i][3]);
  }
  return [...field];
}

async function countStudents(str) {
  const buffer = [];
  try {
    const data = await fs.readFile(str, 'utf-8');
    let rows = data.trim().split('\n');
    for (let i = 0; i < rows.length; i += 1) {
      rows[i] = rows[i].split(',');
    }
    rows = rows.slice(1);
    const fields = findDiffFields(rows);
    buffer.push(`Number of students: ${rows.length}`);
    for (let i = 0; i < fields.length; i += 1) {
      const fieldSt = rows.filter((item) => item[3] === fields[i]);
      const namesList = fieldSt.map((item) => item[0]);
      const names = namesList.join(', ');
      const num = fieldSt.length;
      buffer.push(`Number of students in ${fields[i]}: ${num}. List: ${names}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  return buffer.join('\n');
}

const http = require('http');

const port = 1245;
const host = 'localhost';
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const result = await countStudents(process.argv[2]);
    res.writeHead(200);
    res.end(`This is the list of our students\n${result}\n`);
  }
  res.end();
}).listen(port, host);

module.exports = app;
