let doc = document;

let elementField = doc.querySelectorAll('.element-field');
let resultGame = doc.querySelector('.result-game');

let playerTurn = true;
let elementX = `<div class="game-element_x"></div>`;
let elementO = `<div class="game-element_o"></div>`;
let counterElement = 0;

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
		if (this.innerHTML) {
			return;
		}

		if (playerTurn) {
			this.innerHTML = elementX;
		} else {
			this.innerHTML = elementO;
		}

		playerTurn = !playerTurn;

		counterElement++;

		if (counterElement == elementField.length) {
			resultGame.innerHTML = `<span>Game Over</span>`;
		}
	}
}





/*
*1. Каждый клик должен давать сначала крестик, потом нолик, по очереди
*2. Если в ячейке уже стоит какой то выбор, туда уже ничего записать нельзя
*3. Когда мы заполнили все поля, нам говорят что игра окончена
!4. Проверяем победителя
*/