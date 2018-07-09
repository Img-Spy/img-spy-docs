// Play it on JsFiddle: https://jsfiddle.net/q9ezexgh/
interface Person {
    name: string;
    surname: string;
}
function personGreetings(whom: Person) {
		return whom.name + " " + whom.surname;
}

type GreetingsCallback<T> = (whom: T) => string;
class Greetings<T> {
    constructor(private cb: GreetingsCallback<T>) {}

    public to(whom: T) {
        document.body.innerHTML = this.cb(whom);
    }
}

const greetings = new Greetings<Person>(personGreetings);
greetings.to({ name: "John", surname: "Smith"});
