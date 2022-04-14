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











