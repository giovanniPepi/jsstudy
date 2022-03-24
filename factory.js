const personFactory = (name, age) => {
    const sayHello = () => console.log ('Hello!'); 
    /* This was updated in ES6 */ 
    return {name, age, sayHello};
    };

const jeff = personFactory ('jeff', 27);
console.log(jeff.name);
jeff.sayHello();
console.log(jeff.age);

/* The console log ({}) trick */

const personName = "Maynard"; 
const color = 'red';
const number = 34; 
const food = "rice";

console.log (personName, color, number, food);
console.log({personName, color, number, food});