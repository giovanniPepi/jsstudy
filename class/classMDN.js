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






