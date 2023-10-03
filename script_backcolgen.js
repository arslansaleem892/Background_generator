var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setgradient() {
	body.style.background = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
	css.textContent = body.style.background;

}


color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);

const a = "ARS";
const b = "ABS";
const c = 20;

const obj = "Hello "+a+" are you "+(c-10)
const obj = `Hello ${a} are you ${c-10}`

const array = [1,2,3,4];
const double = [];

const newArray = array.forEach((num)=>{
	return num*2;
})

const mapArray = array.map(num=>num*2);
console.log("mapArray",mapArray);

const filterArray = array.filter(num=>num>2);
console.log('filterarray',filterArray);

const reduceArray = array.reduce((x,num)=>{
	return x+num;
},5);
console.log('reducearray',reduceArray);


//Instantiation

class Player{
	constructor(name,type){
		this.name=name;
		this.type=type;
	}
	introduce(){
		console.log(`Hi I am ${this.name} and have passion ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name,type){
	super(name,type)}

	play(){
		console.log(`This is wizard ${this.name} And ${this.type}`);
	}

}

const wizard1 = new Wizard('ARS','Engineer');