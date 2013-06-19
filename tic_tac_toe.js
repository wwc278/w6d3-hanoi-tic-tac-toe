function p(stuff) {
	console.log(stuff);
}

function Player() {

}

function Game() {
	this.board = new Board()
}

function Board() {
	this.rows = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];
}

Board.prototype._checkSpaces = function(array) {
	if ( array.every( function(space) {
		return (space === "X");
	}) ) { return true; }
	if (array.every( function(space) {
		return space === "O";
	})) { return true; }
}

Board.prototype._cols = function() {
	var cols = [[], [], []]
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			cols[i][j] = this.rows[j][i];
		}
	}
	return cols
}

Board.prototype._diagonals = function() {
	that = this
	return [
  	[[0, 0], [1, 1], [2, 2]],
  	[[0, 2], [1, 1], [2, 0]]
	].map(function (diag_arr) {
		return diag_arr.map(function (pos) {
			return that.rows[pos[0]][pos[1]];
		});
	});
}

Board.prototype.gameOver = function() {
	if ( (this.rows.some(this._checkSpaces.bind(this)))
    || (this._cols().some(this._checkSpaces.bind(this)))
	  || (this._diagonals().some(this._checkSpaces.bind(this))) ) {
	  	console.log("Game Over");
	}
}

Board.prototype.move = function(row, col, mark) {
	if (this._legalMove(row, col)) {
		this.rows[row][col] = mark;
	} else {
		console.log("You're a dumbass.");
	}
	this.gameOver();
}

Board.prototype._legalMove = function(row, col) {
	if (row < 0 || row > 2 || col < 0 || col > 2) { return false }
	return (!this.rows[row][col])
}

Board.prototype.display = function() {

	this.rows.forEach(function(row){
		rowString = "";
		for (var i = 0; i < 3; i++) {
			rowString += (row[i]) ? row[i] : " ";
			rowString += '|'
		};
		console.log("|" + rowString);
	});
}

board = new Board;

board.move(0, 1, "X")
board.move(0, 0, "O")
board.move(0, 2, "X")
board.move(1, 0, "O")
board.move(2, 0, "O") // Sucka!


board.display();
