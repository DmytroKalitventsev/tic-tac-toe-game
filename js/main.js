let doc = document;

let elementField = doc.querySelectorAll('.element-field');
let gameElement = doc.querySelectorAll('.game-element');
let resultGame = doc.querySelector('.result-game');

let x, o;

let playerTurn = true;
let counterGameElement = 0;
let choicePlayer1 = 0;
let choicePlayer2 = 0;
let winningOptions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6],
];

for (let i = 0; i < elementField.length; i++) {
	elementField[i].onclick = function () {
		if (gameElement[i].classList.contains('game-element_x') || gameElement[i].classList.contains('game-element_o')) {
			return;
		}

		if (playerTurn) {
			gameElement[i].classList.add('game-element_x');
		} else {
			gameElement[i].classList.add('game-element_o');
		}

		playerTurn = !playerTurn;

		counterGameElement++;

		if (counterGameElement == gameElement.length) {
			resultGame.innerHTML = `<span>Game Over</span>`;
		}
	}
}





/*
*1. Каждый клик должен давать сначала крестик, потом нолик, по очереди
*2. Если в ячейке уже стоит какой то выбор, туда уже ничего записать нельзя
*3. Когда мы заполнили все поля, нам говорят что игра окончена
4. Проверяем победителя
*/