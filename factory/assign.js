/* Concatenative inheritance is the process of copying the properties from one object 
to another, without retaining a reference between the two objects. It relies on JavaScript’s
dynamic object extension feature. */

const proto = {
    hello: function hello() {
        return `Helloo, my name is ${this.name}`;
    }
};

const john2 = Object.assign({}, proto, {name: 'John2'});
const msg = john2.hello();
console.log(msg);

// turning an object into an event emitter 
// needs to be in a module

/* import Events from 'eventemitter3';

const object = {};
Object.assign(object, Events.prototype);
object.on('event', payload => console.log(payload));
object.emit('event', 'some data');
 */

