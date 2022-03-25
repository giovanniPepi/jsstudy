// global
let myFunction = function () {
    console.log(this);
};
myFunction();

let myObject = {}; 
myObject.myMethod = function () {
    console.log(this);
};
myObject.myMethod();

