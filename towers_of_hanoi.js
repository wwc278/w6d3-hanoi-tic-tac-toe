// var TOH = module.exports = {};
//
// TOH.TowersOfHanoi = function () {
//
// }
//

function p (stuff) {
	console.log(stuff);
}

function TowersOfHanoi () {
	this.towers = [[3, 2, 1], [], []];
}

var TOHProto = TowersOfHanoi.prototype

TOHProto.display = function () {
	this.towers.forEach(function(arg) {console.log(arg)});
}

TOHProto.moveDisk = function (initialPos, finalPos) {
	if (this.legalMove(initialPos, finalPos)) {
		this.towers[finalPos].push( this.towers[initialPos].pop() );
		this._won();
	} else {
		console.log('You Dumbass!');
	}
}

TOHProto.legalMove = function(initialPos, finalPos) {
	if ( (this.towers[initialPos] === undefined) ||
	(this.towers[finalPos] === undefined) ) { return false; }

	if (this.towers[initialPos].length === 0) { return false; }

	if (this.towers[finalPos].length === 0) { return true; }

	return ( this._last(this.towers[finalPos]) >
	  this._last(this.towers[initialPos]) );
}

TOHProto._last = function(array) {
	return array[array.length - 1];
}

TOHProto._won = function() {
	if (this.towers[2].length === 3) { console.log('You Won!'); }
}

module.exports = {
	"TowersOfHanoi": TowersOfHanoi
}

game = new TowersOfHanoi();

game.moveDisk(0,2);
game.moveDisk(0,1);
game.moveDisk(2,1);
game.moveDisk(0,2);
game.moveDisk(1,0);
game.moveDisk(1,2);
game.moveDisk(0,2);
game.display()

