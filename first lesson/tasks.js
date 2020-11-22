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
			case '5':
			runFifthTask();
			break;
			case 'exit':
			break;
			default:
			alert('Задания с таким номером нет!');
			break;
		}
	}
} while (taskNumber > 0 && taskNumber <= 5);

// First task
function runFirstTask() {
	const firstValue = 10;
	let secondValue;

	secondValue = 5;
	console.log(secondValue);
	alert(`${firstValue + secondValue}`);
}


// Second task
function runSecondTask() {
	const question = prompt("Желаете ли вы продолжить?", '');

	alert(`${
		(question != null) ? 'Программа выполнена' : 'Пользователь отменил выполнение программы'
	}`);
}


// Third task
function runThirdTask() {
	const firstNumber = +prompt("Введите первое число", '');
	const secondNumber = +prompt("Введите второе число", '');

	alert(`${
		(firstNumber > secondNumber) ? (firstNumber - secondNumber) : (firstNumber + secondNumber)
	}`);
}


// Fifth task
function runFifthTask() {
	const firstNumber = +prompt("Введите первое число", '');
	const secondNumber = +prompt("Введите второе число", '');

	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert("Вы указали значение неподходящего типа");
	} else {
		alert(`${
			(firstNumber > secondNumber) ? (firstNumber - secondNumber) : (firstNumber + secondNumber)
		}`);
	}
}
