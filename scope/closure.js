// Scope A
let myFunction = function () {
    // Scope B
    let name = 'Todd'; // it's defined in Scope B
    let myOtherFunction = function () {
        //Scope C: 'name' is acessible here 
        console.log('My name is ' + name);
    };
    console.log(name); 
    myOtherFunction();
};
myFunction();

/* The inner function has acess to the scope in the outer function.
This is called Lexical Scope - or Closure */

let name2 = 'Todd'; 
let scope1 = function () {
    // name is available here
    let scope2 = function () {
        // name is available here
        let scope3 = function () {
            // name is available here
        }
    }
}

// Lexical scope does not work backwards. 