// Play it on JSFIDDLE: https://jsfiddle.net/dqvnmv2d/
const multKo = (x) => Math.random() * x; 
const multOk = (x, rnd) => rnd * x; 

let res;
let x = 5;

// KO
res = multKo(x);
document.body.innerHTML += "Imposible to test!</br>";

// OK
let rand = Math.random();
res = multOk(x, rand);
if (res === (x * rand)) {
		document.body.innerHTML += "It works!</br>";
} else {
		document.body.innerHTML += "It doesn't work!</br>";
}
