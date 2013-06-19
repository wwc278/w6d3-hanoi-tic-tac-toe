TOH = (function(){

	function Game () {
		this.towers = [[3, 2, 1], [], []];
	}

	var TOHProto = Game.prototype

	TOHProto.moveDisk = function (initialPos, finalPos) {
		if (this.legalMove(initialPos, finalPos)) {
			this.towers[finalPos].push( this.towers[initialPos].pop() );
		} else {
			throw('You Dumbass!');
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

	TOHProto.won = function() {
		return (this.towers[2].length === 3)
	}

	return {
		Game: Game
	}
})();
