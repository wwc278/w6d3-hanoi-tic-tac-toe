ticTacToeUI = function (){

	var game = new TTT.Game();

	function display(){
		$("td").empty();
		_.each(game.board.rows, function(row, rowIdx){
			var tableRow = $("#row" + rowIdx);
			_.each(row, function(space, colIdx){
				if (space) {
					var tableSpace = tableRow.children("#space" + colIdx);
					tableSpace.html(space);
				}
			});
		});
	}

	$(".space").click(function(e){
		var row, col;
		var target = $(e.target);
		row = target.parents(".row").attr("id")[3].valueOf();
		col = target.attr("id")[5].valueOf();

		try {
			game.move(row, col);
			display();
			var winner = game.winner()
			if (winner) {
				$("#message").html(winner + " wins!");
			}
		} catch(err) {
			$("#message").html(err);
		}
	});
};

$(ticTacToeUI);