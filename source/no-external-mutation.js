// Play it on JSFIDDLE: https://jsfiddle.net/edw6uoca/1/
const setNameKo = (person, name) => {
    person.name = name;
    return person;
};
const setNameOk = (person, name) => 
    Object.assign({}, person, { name: name });
