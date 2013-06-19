playGame = function (){

	var game = new TOH.Game()

	function display() {
		$("#display").html(game.toString());
	}

	function checkWon() {
		if (game.won()) {
			$("#message").html("You Won!");
		}
	}

	$("form").submit(function(e) {
		e.preventDefault();

    initialPos = $("#initialPos").val();
    finalPos = $("#finalPos").val();

		try {
			game.moveDisk(initialPos, finalPos);
		} catch(err) {
			$("#message").html(err);
		}

    display();
		checkWon();
	});
};

$(playGame)
