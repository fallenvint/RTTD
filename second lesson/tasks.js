let taskNumber;

do {
	taskNumber = prompt('Введите номер задачи или exit для выхода', '');

	if ((+taskNumber === 0) || (isNaN(+taskNumber) && taskNumber != 'exit')) {
		alert('Введено неверное значение либо отмена программы');
	} else {
		switch (taskNumber) {
			case '1':
				runFirstTask();
				break;
			case '2':
				runSecondTask();
				break;
			case '3':
				runThirdTask();
				break;
			case '4':
				runForthTask();
				break;
			case 'exit':
				break;
			default:
				alert('Задания с таким номером нет!');
				break;
		}
	}
} while (taskNumber > 0 && taskNumber <= 4);

// First task
function runFirstTask() {
	while (confirm ("Хотите ли вы продолжить"));
}


// Second task
function runSecondTask() {
	const firstNumber = +prompt("Введите число", '');

	if (isNaN(firstNumber)) {
		alert("Введено неверное значение");
	} else {
		if (firstNumber < 5){
			alert("Ошибка: введено слишком маленькое число");
		} else {
			for(let i = 0; i <= firstNumber; i++){
				console.log(i);
			}
		}
	}
}


// Third task
function runThirdTask() {
	const firstNumber = +prompt("Введите число", '');

	if (isNaN(firstNumber)) {
		alert("Введено неверное значение");
	} else {
		if (firstNumber < 5){
			alert("Ошибка: введено слишком маленькое число");
		} else {
			let i = 3;

			while (i <= firstNumber) {
				console.log(i++);
			}
		}
	}
}


// Forth task
function runForthTask() {
	const number = +prompt("Выберите один из пунктов:\n 1. Автомобиль;\n 2. Мотоцикл;\n 3. Велосипед.", '');

	switch (number) {
		case 1:
			alert("Автомобиль");
			break;
		case 2:
			alert("Мотоцикл");
			break;
		case 3:
			alert("Велосипед");
			break;
		default:
			alert("Введен неверный номер");
			break;
	}
}


// Fifth task
function sumupTwoNumbers (firstNumber, secondNumber){
	console.log(`${firstNumber + secondNumber}`);
}

function subtractTwoNumbers (firstNumber, secondNumber){
	console.log(`${firstNumber - secondNumber}`);
}


// Sixth task
let multiplyTwoNumbers = function(firstNumber, secondNumber){
	console.log(`${firstNumber * secondNumber}`);
}

let divideTwoNumbers = function(firstNumber, secondNumber){
	console.log(`${firstNumber / secondNumber}`);
}


// Seventh task
let sumupTwoNumbers = (firstNumber, secondNumber) => console.log(`${firstNumber + secondNumber}`);
let subtractTwoNumbers = (firstNumber, secondNumber) => console.log(`${firstNumber - secondNumber}`);
let multiplyTwoNumbers = (firstNumber, secondNumber) => console.log(`${firstNumber * secondNumber}`);
let divideTwoNumbers = (firstNumber, secondNumber) => console.log(`${firstNumber / secondNumber}`);
