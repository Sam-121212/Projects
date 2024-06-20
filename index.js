/*console.log('Hello');
console.log('ciao')

window.alert('Thins is an alert');
window.alert('aaaaaah');

document.getElementById("myH1").textContent = 'Hello';
document.getElementById("myP").textContent = 'Ciaooooone';

let age = 25;
let price = 23;
let gpa = 3.4;
let email = "samuele@gmail.com";
let firstName = "gennaro";

console.log(`the price is ${age} right`);
console.log(`let's think ${age} is more than ${price}`);
console.log(typeof firstName);

console.log(`your name is ${firstName}, init? and you have ${age} years`);
console.log(typeof email);
console.log(`the right address is ${email}`);

let online = true;

console.log(`Sam is online: ${online}`);



let fullName = "Sam";
let age = 29;
let student = false;

document.getElementById("p1").textContent = `Ciaooooo ${fullName}`;
document.getElementById("p2").textContent = `hai ${age} anni, vero?`;
document.getElementById("p3").textContent = student;



let x = 10;
x += 1;
console.log(x);




let age = window.prompt("età?");
age = Number(age);
console.log(age, typeof age);




const PI = 3.14159;
let radius;
let circumference;
//radius = window.prompt('enter the radius of a circle');

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("text").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("H3").textContent = circumference + " cm";
}


*/

// Programmino per contatore

const pulsantedim = document.getElementById("dim");
const pulsantereset = document.getElementById("resetta");
const pulsanteaum = document.getElementById("aum");
const contalabel = document.getElementById("contalabel");
let count = 0;

pulsanteaum.onclick = function(){
    count ++;
    contalabel.textContent = count;
}

pulsantedim.onclick = function(){
    count --;
    contalabel.textContent = count;
}

pulsantereset.onclick = function(){
    count = count * 0;
    contalabel.textContent = count;
}



