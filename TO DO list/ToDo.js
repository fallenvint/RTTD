'use strict';

const addButton = document.getElementById('add_btn');

//Get Date value
let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();

today = day + '.' + month + '.' + year;

function addTaskToList(){
	let toDoList = document.getElementById('todolist'); // get parent block
	let taskValue = document.getElementById('task').value; // get task value

	// Add Task
	let li = document.createElement('li');
	li.className = 'list-item flex';

	let dateBox = document.createElement('span');
	dateBox.className = 'date';
	dateBox.innerHTML = today;
	li.appendChild(dateBox);

	let taskBox = document.createElement('span');
	taskBox.className = 'order_flex';
	taskBox.innerHTML = taskValue;
	li.appendChild(taskBox);

	let doneButton = document.createElement('a');
	doneButton.id = 'done_btn';
	doneButton.className = 'button done';
	doneButton.href = 'javascript:void(0);';
	doneButton.text = '+';
	li.appendChild(doneButton);

	let deleteButton = document.createElement('a');
	deleteButton.id = 'delete_btn';
	deleteButton.className = 'button delete';
	deleteButton.href = 'javascript:void(0);';
	deleteButton.text = '×';
	li.appendChild(deleteButton);

	toDoList.appendChild(li);
}

function deleteTask() {
	let deleteButton = document.querySelector('.delete');

	deleteButton.closest('li.list-item').remove();
}

addButton.onclick = addTaskToList;
deleteButton.onclick = deleteTask;