export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(stud) {
    if (!(stud instanceof Array)) {
      throw new TypeError('Studnets must be an array');
    }
    stud.forEach((ele) => {
      if (typeof ele !== 'string') {
        throw new TypeError('Elements of the array must be strings');
      }
    });
    this._students = stud;
  }
}
