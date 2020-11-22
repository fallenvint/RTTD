// First task
const firstValue = 10;
let secondValue;

secondValue = 5;
console.log(secondValue);
alert(`${firstValue + secondValue}`);


// Second task
const question = prompt("Желаете ли вы продолжить?", '');

alert(`${
	(question != null) ? 'Программа выполнена' : 'Пользователь отменил выполнение программы'
}`);


// Third task
const firstNumber = +prompt("Введите первое число", '');
const secondNumber = +prompt("Введите второе число", '');

if (isNaN(firstNumber) || isNaN(secondNumber)) {
	alert ('Одно из введенных значений не число');
} else {
	alert(`${
		(firstNumber > secondNumber) ? (firstNumber - secondNumber) : (firstNumber + secondNumber)
	}`);
}


// Fifth task
const firstNumber = +prompt("Введите первое число", '');
const secondNumber = +prompt("Введите второе число", '');

if (isNaN(firstNumber) || isNaN(secondNumber)) {
	alert("Вы указали значение неподходящего типа");
} else {
	alert(`${
		(firstNumber > secondNumber) ? (firstNumber - secondNumber) : (firstNumber + secondNumber)
	}`);
}
