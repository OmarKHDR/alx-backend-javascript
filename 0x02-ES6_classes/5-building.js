export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    console.log(this.constructor.name);
    if (this.constructor.name !== 'Building' && this.evacuationWarningMessage !== undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
