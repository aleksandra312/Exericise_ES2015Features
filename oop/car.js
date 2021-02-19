class Vehicle {
	constructor(make, model, year) {
		for (let prop of properties) {
			if (!prop) throw new Error('Vehicle details cannot be empty!');
		}
		this.make = make;
		this.model = model;
		this.year = year;
	}

	honk() {
		return 'Beep!';
	}

	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year, numWheels) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		return 'VROOM!!!';
	}
}

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}

	add(addVehicle) {
		if (!(addVehicle instanceof Vehicle)) {
			return 'Only vehicles are allowed in here!';
		}
		if (this.vehicles.length() < this.capacity) {
			return 'Sorry, we’re full.”';
		}
		this.vehicles.push(addVehicle);
	}
}
