export default class ALXClass {
	constructor(size, location) {
		this._size = size;
		this._location = location;
	}

	[Symbol.toPrimitive](hint) {
		switch (hint) {
			case 'number':
				return this._size;
			case 'string':
				return this._location;
		}
	}
}
