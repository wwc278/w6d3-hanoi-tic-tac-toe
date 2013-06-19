var readline = require('readline');

var terminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// terminal.question("Gimme a numba, sucka!\n", function(input) {
// 	console.log(input);
// 	terminal.close();
// });

function crazySort(array) {
	if (array.length === 1) return array;

	var middleIndex = Math.floor(array.length / 2);

	var leftArr = crazySort(array.slice(0, middleIndex));
	var rightArr = crazySort(array.slice(middleIndex, array.length));

	return sortedMerge(leftArr, rightArr);
}

function sortedMerge(leftArr, rightArr) {
	sortedArr = []
	while (leftArr.length != 0 && rightArr.length != 0) {
		compare(leftArr[0], rightArr[0])
		if (leftIsGreater(leftArr[0], rightArr[0])) {
			sortedArr.push( rightArr.shift() );
		} else {
			sortedArr.push( leftArr.shift() );
		}
	}
	return sortedArr.concat(leftArr).concat(rightArr);
}

function nextArrayItem(leftArr, rightArr)

function compare(leftArr, rightArr, callback) {
	console.log(leftArr[0], rightArr[0])
	terminal.question("Which is greater?", callback)
}

console.log(crazySort([3,4,2,7,5]))

Array.prototype.last = function() {
	return this[this.length - 1]
}

Array.prototype.first = function() {
	return this[0]
}

function crazySort(array) {

	var leftStack = [array]
	var rightStack = []

	var sortStep = function() {
		if (leftStack.length === 0) {
			var result = [].concat(leftStack.pop)
			console.log()
		} else {
			if (leftStack.last().sorted) {
				if (rightStack.last().sorted) {
					sortedMerge()
				} else {
					split(leftStack.pop())
				}
			} else {
				split(rightStack.pop())
			}
		}
	}

	var split = function(array) {
		var middleIndex = Math.floor(array.length / 2);

		var leftArray = array.slice(0, middleIndex);
		var rightArray = array.slice(middleIndex, array.length);

		if (leftArray.length === 1) leftArray.sorted = true
		if (rightArray.length === 1) rightArray.sorted = true

		leftStack.push(leftArray)
		rightStack.push(rightArray)

		sortStep()
	}

	var sortedMerge

}