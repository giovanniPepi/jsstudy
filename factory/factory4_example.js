/* factory function using Object.create() 
Any function in JS can create new objects */ 

const proto = {
    hello () {
        return `Hello, my name is ${this.name}`;
    }
};

const greeter = (name) => Object.assign(Object.create(proto), {
    name
});

const john = greeter('john');
const msg = john.hello();

console.log(msg);