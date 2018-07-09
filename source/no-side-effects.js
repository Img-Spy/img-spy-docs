// Play it on JSFIDDLE: https://jsfiddle.net/zrL8cr27
const bob = { name: "Bob", age: 25};

// KO
const print = (person) => {
		document.body.innerHTML += person.name + "(" + person.age + ")</br>";
}
print(bob);

// OK
const toString = (person) => {
		return person.name + "(" + person.age + ")</br>";
}
document.body.innerHTML += toString(bob);
