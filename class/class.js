// basic class syntax
 
class myClass {
  // The constructor() method is called automatically by new,
  // so we can initialize the object there
  constructor() {} 
  method1() {}
  method2() {}
  method3() {}
}

// then call using
new myClass();

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// using
let user = new User('john');
user.sayHi();

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

console.log(User);

console.log('space...............................');

class AnotherUser {
  
  constructor(name) {
    //this will call the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if(value.length < 4) {
      alert("Provided name is too short");
      return; 
    } 
      this._name = value;
  }

}

let newUser = new AnotherUser("Johnn");
console.log(newUser.name);

//class fields

class User2 {
  name = "El Johnno";

  sayHi() {
    console.log(`Hello, this is ${this.name}!`);
  }
}

new User2().sayHi();
console.log(User2.name);
console.log(User2.prototype.name);

// binding this

class Button {
  constructor(value) {
    this.value = value; 
  }

  click () {
    console.log(this.value);
  }
}

let button = new Button ('Hello');
setTimeout(button.click, 1000); //undefined!


//the class field click = () => {..} is created on a per object basis
class Button2 {
  constructor(value) {
    this.value = value; 
  }

  click = () => {
    console.log(this.value);
  }
}

let button2 = new Button2 ('Hello');
setTimeout(button.click, 1000); //undefined!


