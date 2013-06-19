var fs = require('fs');

function storeNums(maxNum) {
	var nums = [];
	for (var i = 1; i <= maxNum; i++) {
		nums.push(i);
	}
	fs.writeFile('numbers.txt', nums.join('\n'), function(err) {
		if (err) throw err;
		console.log('File Saved.');
	});
}

storeNums(50);

function reverseNums(filename) {
	var string = '';
	fs.readFile(filename, 'utf8', function(err, data) {
		var reversedNums = data.split('\n').reverse().join('\n');

		fs.writeFile('reversedNumbers.txt', reversedNums, function(err) {
			if (err) throw err;
			console.log('File Saved.');
		});
	});
}

reverseNums('numbers.txt');