// Play it on JSFIDDLE: https://jsfiddle.net/yzL6k1L4/
var personA = { name: "John", age: 32 };
document.body.innerHTML += personA.name + "</br>"; // Prints John
var personB = personA;
personB.name = "Anna";
document.body.innerHTML += personB.name + "</br>"; // Prints Anna
document.body.innerHTML += personA.name + "</br>"; // Prints Anna too!
