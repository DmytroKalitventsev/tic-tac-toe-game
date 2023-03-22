let doc = document;

let elementField = doc.querySelectorAll('.element-field');
let playerWalks = doc.querySelector('.player-walk');
let resultGame = doc.querySelector('.result-game');
let btnResetGame = doc.querySelector('.reset-game');

let playerTurn = 0;
let playerX = 'Player X';
let playerO = 'Player O';
let gameElementX = `<div class="game-element_x"></div>`;
let gameElementO = `<div class="game-element_o"></div>`;
let counterElement = 0;

startGame();
resetGame();

function startGame() {
	for (let i = 0; i < elementField.length; i++) {
		elementField[i].innerHTML = '';

		elementField[i].onclick = function () {
			if (this.innerHTML) {
				return;
			}
			
			if (playerTurn % 2 == 0) {
				this.innerHTML = gameElementX;
				playerWalks.innerText = playerO;
			} else {
				this.innerHTML = gameElementO;
				playerWalks.innerText = playerX;
			}

			playerTurn++;

			showResultGame();
		}
	}

	playerTurn = 0;
	resultGame.innerText = '';
	playerWalks.innerText = playerX;
}

function resetGame() {
	btnResetGame.onclick = startGame;
}

function checkWinner() {
	if (elementField[0].innerHTML == gameElementX && elementField[1].innerHTML == gameElementX && elementField[2].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[3].innerHTML == gameElementX && elementField[4].innerHTML == gameElementX && elementField[5].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[6].innerHTML == gameElementX && elementField[7].innerHTML == gameElementX && elementField[8].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[0].innerHTML == gameElementX && elementField[3].innerHTML == gameElementX && elementField[6].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[1].innerHTML == gameElementX && elementField[4].innerHTML == gameElementX && elementField[7].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[2].innerHTML == gameElementX && elementField[5].innerHTML == gameElementX && elementField[8].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[0].innerHTML == gameElementX && elementField[4].innerHTML == gameElementX && elementField[8].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[2].innerHTML == gameElementX && elementField[4].innerHTML == gameElementX && elementField[6].innerHTML == gameElementX) {
		return playerX;
	} else if (elementField[0].innerHTML == gameElementO && elementField[1].innerHTML == gameElementO && elementField[2].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[3].innerHTML == gameElementO && elementField[4].innerHTML == gameElementO && elementField[5].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[6].innerHTML == gameElementO && elementField[7].innerHTML == gameElementO && elementField[8].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[0].innerHTML == gameElementO && elementField[3].innerHTML == gameElementO && elementField[6].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[1].innerHTML == gameElementO && elementField[4].innerHTML == gameElementO && elementField[7].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[2].innerHTML == gameElementO && elementField[5].innerHTML == gameElementO && elementField[8].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[0].innerHTML == gameElementO && elementField[4].innerHTML == gameElementO && elementField[8].innerHTML == gameElementO) {
		return playerO;
	} else if (elementField[2].innerHTML == gameElementO && elementField[4].innerHTML == gameElementO && elementField[6].innerHTML == gameElementO) {
		return playerO;
	}
}

function finishGame() {
	for (let i = 0; i < elementField.length; i++) {
		elementField[i].onclick = null;
	}
}

function showResultGame() {
	let winner = checkWinner();

	if (winner) {
		finishGame();
	}

	if (winner == playerX) {
		resultGame.innerText = `${playerX} wins!`;
	} else if (winner == playerO) {
		resultGame.innerText = `${playerO} wins!`;
	} else if (playerTurn == elementField.length) {
		resultGame.innerText = 'Draw!';
	}
}