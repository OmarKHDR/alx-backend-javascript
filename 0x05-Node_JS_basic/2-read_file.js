#!/usr/bin/node

const fs = require('fs');

function findDiffFields(arr) {
  const field = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    field.add(arr[i][3]);
  }
  return [...field];
}

function countStudents(str) {
  fs.readFile(str, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    let rows = data.trim().split('\n');
    for (let i = 0; i < rows.length; i += 1) {
      rows[i] = rows[i].split(',');
    }
    rows = rows.slice(1);
    const fields = findDiffFields(rows);
    console.log('Number of students:', rows.length);
    for (let i = 0; i < fields.length; i += 1) {
      const fieldSt = rows.filter((item) => item[3] === fields[i]);
      const namesList = fieldSt.map((item) => item[0]);
      const names = namesList.join(', ');
      const num = fieldSt.length;
      console.log(`Number of students in ${fields[i]}: ${num}. List: ${names}`);
    }
  });
}

module.exports = countStudents;
