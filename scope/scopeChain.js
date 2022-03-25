/* When resolving a variable, JavaScript starts at the innermost
scope and searches outwards until it finds the variable/object/function
it was looking for.*/

// inside our scope we can return things to global: 

let sayHello = function (name) {
    let text = "Hello, " + name + "!"; 
    return function() {
        console.log(text);
    }
}
sayHello("Gerijeb"); // nothing

// the function returns a function, which needs assignment
// and calling: 

let helloGerijeb = sayHello("Gerijeb");
helloGerijeb();

// ... or call it this way: 
sayHello('Gerijeb')();

