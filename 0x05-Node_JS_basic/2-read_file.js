#!/usr/bin/node

const fs = require('fs');

function findDiffFields(arr) {
  const field = new Set();
  for (const item in arr) {
    field.add(item[3]);
  }
  return [...field];
}

function countStudents(str) {
  fs.readFile(str, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    let rows = data.trim().split('\n');
    for (let i = 0; i < rows.length; i += 1) {
      rows[i] = rows[i].split(',');
    }
    rows = rows.slice(1);
    const fields = findDiffFields(rows);
    console.log('Number of students:', rows.length);
    for (const field in fields) {
      const fieldSt = rows.filter((item) => item[3] === field);
      const namesList = fieldSt.map((item) => item[0]);
      const names = namesList.join(', ');
      const num = fieldSt.length;
      console.log(`Number of students in ${field}: ${num}. List: ${names}`);
    }
  });
}
