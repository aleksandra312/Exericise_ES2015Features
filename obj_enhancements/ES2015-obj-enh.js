//Same keys and values - Write an ES2015 Version

function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName
	};
}

//Computed Property Names - Write an ES2015 Version

let favoriteNumber = 42;

const instructor = {
	firstName: 'Colt',
	[favoriteNumber]: 'That is my favorite!'
};

//Object Methods - Write an ES2015 Version

const instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	}
};

//createAnimal function - Write an ES2015 Version
function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		}
	};
}
