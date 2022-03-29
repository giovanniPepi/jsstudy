const Person = (name) => {
    const sayName = () => console.log (`my name is ${name}`);
    return {sayName};
}
const Nerd = (name) => {
     /* simply create a person and pull out the sayName 
     function with destructuring assignment syntax! */
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
}
const jeff = Nerd('jeff');
jeff.sayName();
jeff.doSomethingNerdy();