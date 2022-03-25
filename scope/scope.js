let myFunction = function () {
    let name = 'Todd'; 
    console.log(name);
};

/* The variable name is scoped locally, it isn’t exposed to the 
parent scope and therefore undefined.The variable name is scoped locally, it isn’t exposed to the parent
scope and therefore undefined. */ 
/* console.log(name); */ 

// Scope A (global)
let myFunction2 = function () {
    // Scope B 
    let myOtherFunction = function () {
        // Scope C
    }
}

