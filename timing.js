var date = new Date(Date.now());
var hours = date.getHours(), mins = date.getMinutes(), secs = date.getSeconds();

setInterval(logTime, 1000, 1000);

function logTime(interval) {
	date = new Date(date.valueOf() + interval);
	var hours = date.getHours();
	var mins = date.getMinutes();
	var secs = date.getSeconds();
	console.log(hours + ":" + mins + ":" + secs);
}