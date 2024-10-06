export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.lengthy = length;
    this.students = students;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  set lengthy(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._lengthy = len;
  }

  set students(stud) {
    if (!(stud instanceof Array)) {
      throw new TypeError('students must be an array');
    }
    stud.forEach((ele) => {
      if (typeof ele !== 'string') {
        throw new TypeError('students elements must be strings');
      }
    });
    this._students = stud;
  }

  get name() {
    return this._name;
  }

  get length() {
    return `${this._length} is the length`;
  }

  get students() {
    return this._students;
  }
}
