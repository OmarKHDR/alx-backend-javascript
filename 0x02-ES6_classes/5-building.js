export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor.name !== 'Building' && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }


  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage')
  }
  get sqft() {
    return this._sqft;
  }
}
