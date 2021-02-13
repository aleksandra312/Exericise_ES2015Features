// ES5 code
function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
		return num % 2 === 0;
	});
}

//ES2015 code

function filterOutOdds(...nums) {
	return nums.filter((num) => num % 2 === 0);
}
//OR
const filteredNums = (...nums) => {
	return nums.filter((num) => num % 2 === 0);
};

//find min

function findMin(...nums) {
	return nums.reduce((accum, next) => {
		return next < accum ? next : accum;
	});
}

//merge objects

const mergeObjects = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

// doubleAndReturnArgs

const doubleAndReturnArgs = (array, ...values) => {
	return [ ...array, ...values.map((val) => val * 2) ];
};

//Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
	let randomNum = Math.floor(Math.random() * items.length);
	return [ ...items.slice(0, randomNum), ...items.slice(randomNum + 1) ];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [ ...array1, ...array2 ];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	let newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
