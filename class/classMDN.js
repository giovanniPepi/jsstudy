//class declaration 

class Rectangle {
  constructor(height, width) {
    this.height = height; 
    this.width = width; 
  }
}

// class expression 

//unamed
// expression can be acessed via name property

let Rectangle2 = class {
  constructor(height, width) {
    this.height = height; 
    this.width = width; 
  }
}; 
console.log(Rectangle2.name);

//named 

let Rectangle3 = class Rectangle3 {
  constructor(height, width) {
    this.height = height; 
    this.width = width; 
  }
};
console.log(Rectangle3.name);

// class expresisons must be declared before they can be used

// body of a class is executed in strict mode
// strict mode  = increased performance, otherwise silent
// errors are thrown

// Prototype methods

class Rectangle4 {
  constructor(height, width) {
    this.height = height; 
    this.width = width; 
  }

  // getter 
  get area() {
    return this.calcArea(); 
  }

  //Method 
  calcArea() {
    return this.height * this.width; 
  }
}

const square = new Rectangle4(10, 10);
console.log(square.area); 


//Generator methods

class Polygon {
  constructor(...sides) {
    this.sides = sides; 
  }
  //method
  *getSides() {
    for(const side of this.sides) {
      yield side; 
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);
console.log([...pentagon.getSides()]);


// Static methods and properties
// static members cannot be called through class instance
// static methods are often used to create utility functions 
// static properties are useful for caches, fixed-configuration,
// or data you don't need to replicate across instances

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = 'Point';
  static distance(a, b){ 
    const dx = a.x - b.x; 
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10); 

p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(Point.displayName);
console.log(Point.distance(p1, p2));

// binding this

class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this; 
  }
}

let obj = new Animal(); 
obj.speak(); //will return the Animal object
// undefined:  
//let speak = obj.speak;
// speak(); 

Animal.eat() //class Animal
//undefined: 
// let eat = Animal.eat;
// eat(); 


// in strict mode, autobinding will not happen
// this is autobind in traditional function based syntax: 

function Animal2() {
  
  Animal.prototype.speak = function() {
    return this;
  }

  Animal.eat = function() {
    return this; 
  }
}

let obj2 = new Animal(); 
let speak = obj2.speak; 
speak(); 

let eat = Animal.eat;
eat();

// instance properties
// Instance properties must be defined inside of class methods:
class Rectangle5 {
  constructor(height, width) {
    this.height = height; 
    this.width = width; 
  }  
}

// Public field declaration
//with javascript field declaration, we can write the above as
// By declaring fields up-front, class definitions become more self-documenting, 
// and the fields are always present.
class Rectangle6 {
  height = 0;
  width; 
  constructor(height, width) {
    this.height = height;
    this.width = width; 
  }
}

// private field declaration

/* 
It's an error to reference private fields from outside of the class; they can only be read or written within the class body. 
By defining things that are not visible outside of the class, you ensure that your classes' users can't depend on internals, 
which may change from version to version. 
 */

class Rectangle7 {
  #height = 0; 
  #width; 

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

// EXTENDS

class Animal3 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noite`); 
  }
}

class Dog extends Animal3 {

  constructor(name) {
    super(name); // calls the super class constructor
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

let d = new Dog('Mitzie');
d.speak();

/* If there is a constructor present in the subclass, 
it needs to first call super() before using "this".
 */

function Animal4(name) {
  this.name = name;
}

Animal4.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
}

class Dog2 extends Animal4 {
  speak(){
    console.log(`${this.name} barks!`);
  }
}

let b = new Dog2('Chraunz');
b.speak();

// classes cannot extends regular non constructible objects
// if you want to inherit from a regular object, use 
// Object.setPrototypeOf(); 

const Animal5 = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog3 {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog3.prototype, Animal5);
let c = new Dog3('auhehe');
c.speak();

// species

