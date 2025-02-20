import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
	evacuationWarningMessage() {
		console.log("no")
	}
}

try {
    new TestBuilding(200)
	TestBuilding.sqft;
}
catch(err) {
    console.log(err);
}