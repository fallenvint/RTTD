// First task
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combined = firstArray.concat(secondArray);


// Second task
let reversed = [1, 2, 3];

reversed.reverse();


// Third task - 1
let addEndArray = [1, 2, 3];

addEndArray.push(4, 5, 6);


// Third task - 2
let addStartArray = [1, 2, 3];

addStartArray.unshift(4, 5, 6);


// Forth task - 1
let firstChildArray = ['js', 'css', 'jq'];
const firstChild = firstChildArray.shift();

console.log(firstChild);


// Forth task - 2
let lastChildArray = ['js', 'css', 'jq'];
const lastChild = lastChildArray.pop();

console.log(lastChild);


// Fifth task
const sliceArray = [1, 2, 3, 4, 5];
const fisrtSliced = sliceArray.slice(0,3); // Fifth task - 1
const secondSliced = sliceArray.slice(3); // Fifth task - 2


// Sixth task - 1
let fisrtSpliced = [1, 2, 3, 4, 5];

fisrtSpliced.splice(1, 2);


// Sixth task - 2
let secondSpliced = [1, 2, 3, 4, 5];

const newArray = secondSpliced.splice(1, 3);


// Sixth task - 3
let thirdSpliced = [1, 2, 3, 4, 5];

thirdSpliced.splice(3, 0, 'a', 'b', 'c');


// Sixth task - 4
let fifthSpliced = [1, 2, 3, 4, 5];
const lastSplicedChild = fifthSpliced.splice(fifthSpliced.length-1, 1, 'c', 'e');

fifthSpliced.splice(-1, 0, lastSplicedChild[0]);
fifthSpliced.splice(1, 0, 'a', 'b');


// Seventh task
let sorted = [3, 4, 1, 2, 7];

sorted.sort();


// Extra tasks - 1
const firstExtArray = ['a', 'b', 'c'];
const secondExtArray = [1,2,3];
const combinedEx = firstExtArray.concat(secondExtArray);


// Extra tasks - 2
let pushedExtArray = ['a', 'b', 'c'];
pushedExtArray.push(1, 2, 3);


// Extra tasks - 3
const newObject = {
	js:'test', 
	jq: 'hello', 
	css: 'world'
};
Object.keys(newObject);
