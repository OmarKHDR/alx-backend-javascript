export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    if (typeof cd !== 'string') {
      throw new TypeError('code must be a character');
    }
    this._code = cd;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('code must be a character');
    }
    this._name = nm;
  }

  displayFullCurrency() {
	return `${this.name} (${this.code})`;
  }
}
