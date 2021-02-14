//Quick Question #1
// --> [1,2,3,4]

// Quick Question #2
//ref

//Quick Questions #3
//{[1,2,3] => true, [1,2,3] => false}

//hasDuplicate
const hasDuplicate = (array) => new Set(array).size !== array.length;

//vowelCount
function isVowel(char) {
	return 'aeiou'.includes(char);
}

function vowelCount(string) {
	const vowelMap = new Map();
	for (let char of string) {
		let lowerCaseChar = char.toLowerCase();
		if (isVowel(lowerCaseChar)) {
			if (vowelMap.has(lowerCaseChar)) {
				vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
			} else {
				vowelMap.set(lowerCaseChar, 1);
			}
		}
	}
	return vowelMap;
}
