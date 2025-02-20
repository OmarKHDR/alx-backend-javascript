var student1 = {
    firstname: "omar",
    lastname: "khaled",
    age: 32,
    location: "egy"
};
var student2 = {
    firstname: "ahmed",
    lastname: "khaled",
    age: 25,
    location: "egy"
};
var array = [student1, student2];
function createTable(arr) {
    var table = document.createElement('table');
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var student = arr_1[_i];
        table.appendChild(createRow(student));
    }
    return table;
}
function createRow(std) {
    var row = document.createElement('tr');
    for (var key in std) {
        appendToRow(row, std[key]);
    }
    return row;
}
function appendToRow(row, elem) {
    var col = document.createElement('th');
    col.textContent = elem;
    row.appendChild(col);
}
window.onload = function () {
    document.body.appendChild(createTable(array));
};
