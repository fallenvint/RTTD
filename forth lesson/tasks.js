//First to fifth tasks
const city1 = {
	name: "ГородN",
	population: 10000000
};
const city2 = {name: "ГородM", population: 1e6};

city1.getName = () => this.name;
city2.getName = () => this.name;

city1.exportStr = function(){
	for (let key in this) {
		return `name=${this.name}\\npopulation=${this.population}\\n`;
	}
}
city2.exportStr = function(){
	for (let key in this) {
		return `name=${this.name}\\npopulation=${this.population}\\n`;
	}
}

const getObj = () => this;

city1.getCity = getObj;
city2.getCity = getObj;

// Sixth task
const obj = {
	method1: method1 = () => this,
	method2: method2 = () => this,
	method3: method3 = () => "метод3"
};
obj.method1().method2().method3();

//Seventh task
let d1 = [45,78,10,3];

d1[7] = 100;
console.log(`Array: ${d1} and it's elements with 6 and 7 index: ${d1[6]}, ${d1[7]}`);

// Eighth task
const d2 = [45,78,10,3];
let sum2 = 0;

for (let i=0; i<d2.length; i++) {
	sum2 += d2[i];
}

//Ninth task
let d3 = [45,78,10,3];
let sum3 = 0;

d3.push(100);
for (let d3Key in d3) {
	sum3 += d3[d3Key];
}

//Tenth
let d4 = [45,78,10,3];
let my = (a,b) => a - b;

d4.sort(my);
