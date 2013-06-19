var fs = require('fs');

fs.watchFile('numbers.txt', function(curr, prev) {
	console.log("File changed!")
	console.log(curr.mtime)
	console.log("current size: " + curr.size,
	"change in size: " + (curr.size - prev.size))
});