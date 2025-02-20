interface Student {
	firstname: string,
	lastname: string,
	age: number,
	location: string
}

const student1: Student = {
	firstname: "omar",
	lastname: "khaled",
	age: 32,
	location: "egy"
}

const student2: Student = {
	firstname: "ahmed",
	lastname: "khaled",
	age: 25,
	location: "egy"
}

const array:Student[] = [student1, student2];

function createTable(arr: Student[]) {
	const table = document.createElement('table');
	for(let student of arr) {
		table.appendChild(createRow(student));
	}
	return table;
}

function createRow(std: Student) {
	const row = document.createElement('tr');
	for(let key in std) {
		appendToRow(row, std[key as keyof Student]);
	}
	return row;
}

function appendToRow(row: HTMLTableRowElement, elem: any) {
	const col = document.createElement('th');
	col.textContent = elem;
	row.appendChild(col);
}

window.onload = () => {
	document.body.appendChild(createTable(array));
}