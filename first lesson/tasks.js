'use strict';

// First task
let firstValue = 10;
let secondValue;

secondValue = 5;
console.log(secondValue);
alert(firstValue + secondValue);


// Second task
let secondTask = confirm("Перейти ко второму заданию?");

if (secondTask){
	// Task
	let question = prompt("Желаете ли вы продолжить?", '');

	if (question == null) {
		alert("Пользователь отменил выполнение программы");
	} else {
		alert("Программа выполнена");
	}
}


// Third task
let thirdTask = confirm("Перейти к третьему заданию?");

if (thirdTask){
	// Task
	let firstNumber = +prompt("Введите первое число", '');
	let secondNumber = +prompt("Введите второе число", '');

	if (firstNumber > secondNumber) {
		alert(firstNumber - secondNumber);
	} else {
		alert(firstNumber + secondNumber);
	}
}


// Fifth task
let fifthTask = confirm("Перейти к пятому заданию?");

if (fifthTask){
	// Task
	let firstNumber = +prompt("Введите первое число", '');

	if (isNaN(firstNumber)) {
		alert("Вы указали значение неподходящего типа");
	} else {
		let secondNumber = +prompt("Введите второе число", '');

		if (isNaN(secondNumber)) {
			alert("Вы указали значение неподходящего типа");
		} else {
			if (firstNumber > secondNumber) {
				alert(firstNumber - secondNumber);
			} else {
				alert(firstNumber + secondNumber);
			}
		}
	}
}