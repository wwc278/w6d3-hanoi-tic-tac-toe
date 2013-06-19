

playGame = function (){

	var game = new TOH.Game()
	var selected = []

	function display() {
		$(".container").empty();
		_.each(game.towers, function(tower, towerIdx){
			_.each(tower, function(ring, ringIdx) {
				if (ring) {
					var ringDiv = $("<div>");
					ringDiv.addClass("ring");
					ringDiv.attr("id", "ring" + ring);

				  var container = $("#tower" + towerIdx).find("#container" + ringIdx);
					container.append(ringDiv);
				}
			});
		});
	}

	function checkWon() {
		if (game.won()) {
			$("#message").html("You Won!");
		}
	}

	$(".tower").click(function(e){
		var tower = $(e.target).parents('.tower');
		tower.toggleClass("selected");
		if (selected[0] === tower.attr('id')) {
			selected.pop();
		} else {
			selected.push(tower.attr('id'));
		}
		if (selected.length === 2) { move() }
	});

	function move () {
		initialPos = selected[0][5].valueOf()
		finalPos = selected[1][5].valueOf()
		console.log(initialPos, finalPos)

		try {
			game.moveDisk(initialPos, finalPos);
		  display();
	  	checkWon();
		} catch(err) {
			$("#message").html(err);
		}
		$(".selected").toggleClass("selected")
		selected = []
	};

	display()
};

$(playGame)
