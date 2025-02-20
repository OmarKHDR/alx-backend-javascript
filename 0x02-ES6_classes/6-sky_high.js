import Building from "./5-building";

export default class SkyHighBuilding extends Building {
	constructor(sqft, number) {
		this.super(sqft);
		this._floors = number;
	}

	get _floors() {
		return this._floors;
	}

	set _floors(number) {
		if(isNaN(number)) {
			this._floors = parseInt(number);
		} else {
			throw new Error('floors must be a number');
		}
	}

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this._floors} floors`;
	}
}