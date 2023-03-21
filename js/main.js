let doc = document;

let elementField = doc.querySelectorAll('.element-field');
let resultGame = doc.querySelector('.result-game');

let playerTurn = 'o';
let gX = `<div class="game-element_x"></div>`;
let playerO = `<div class="game-element_o"></div>`;
let counterElement = 0;

for (let i = 0; i < elementField.length; i++) {
	elementField[i].onclick = function () {
		if (this.innerHTML) {
			return;
		}

		if (playerTurn == 'o') {
			playerTurn = 'x';
			this.innerHTML = playerX;
		} else {
			playerTurn = 'o';
			this.innerHTML = playerO;
		}

		counterElement++;

		getResultGame();
	}
}

function checkWinner() {
	if (elementField[0].innerHTML == playerX && elementField[1].innerHTML == playerX && elementField[2].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[3].innerHTML == playerX && elementField[4].innerHTML == playerX && elementField[5].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[6].innerHTML == playerX && elementField[7].innerHTML == playerX && elementField[8].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[0].innerHTML == playerX && elementField[3].innerHTML == playerX && elementField[6].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[1].innerHTML == playerX && elementField[4].innerHTML == playerX && elementField[7].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[2].innerHTML == playerX && elementField[5].innerHTML == playerX && elementField[8].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[0].innerHTML == playerX && elementField[4].innerHTML == playerX && elementField[8].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[2].innerHTML == playerX && elementField[4].innerHTML == playerX && elementField[6].innerHTML == playerX) {
		return 'player X';
	} else if (elementField[0].innerHTML == playerO && elementField[1].innerHTML == playerO && elementField[2].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[3].innerHTML == playerO && elementField[4].innerHTML == playerO && elementField[5].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[6].innerHTML == playerO && elementField[7].innerHTML == playerO && elementField[8].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[0].innerHTML == playerO && elementField[3].innerHTML == playerO && elementField[6].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[1].innerHTML == playerO && elementField[4].innerHTML == playerO && elementField[7].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[2].innerHTML == playerO && elementField[5].innerHTML == playerO && elementField[8].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[0].innerHTML == playerO && elementField[4].innerHTML == playerO && elementField[8].innerHTML == playerO) {
		return 'player O';
	} else if (elementField[2].innerHTML == playerO && elementField[4].innerHTML == playerO && elementField[6].innerHTML == playerO) {
		return 'player O';
	}
}

function finishGame() {
	for (let i = 0; i < elementField.length; i++) {
		elementField[i].onclick = null;
	}
}

function getResultGame() {
	let winner = checkWinner();

	if (winner) {
		finishGame();
	}

	if (winner == 'player X') {
		resultGame.innerHTML = 'Player X wins!';
	} else if (winner == 'player O') {
		resultGame.innerHTML = 'Player O wins!';
	} else if (counterElement == elementField.length) {
		resultGame.innerHTML = 'Draw!';
	}
}