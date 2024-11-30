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
  try {
    const data = await fs.readFile(str, 'utf-8');
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
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
