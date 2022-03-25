/* A simple way to create private scope, is by wrapping
 our functions inside a function */

 (function () {
     var myFunction = function () {
         // private scope
     }
 })();

 /* Module Pattern and Revealing Module Pattern */ 

 let Module = (function () {
     return {
         myMethod: function () {
             console.log("myMethod has been called.");
        }, 
        someOtherMethod: function () {
            console.log("someOtherMethod has been called.");
        }
    }
 })();

 Module.myMethod();
 Module.someOtherMethod();

 /* creating a private scope */ 

 let Module2 = (function () {
     let privateMethod = function () {
        console.log("Private method");
     };

     return {
         publicMethod: function() {
            console.log("public method");
         }
     }
 })();

Module2.publicMethod();

/* publicMethods have acess to private ones, they
can still interact but are still unacessible in the global
scope */ 

let Module3 = (function () {
    let privateMethod = function () {
        console.log("Private method has been acessed");
    };
    return { 
        publicMethod: function() {
            // has acess to private 
            privateMethod();
        }
    }
})();

Module3.publicMethod();

var Module4 = (function () {
    var myModule = {};
    var privateMethod = function () {
  
    };
    myModule.publicMethod = function () {
  
    };
    myModule.anotherPublicMethod = function () {
  
    };
    return myModule; // returns the Object with public methods
  })();
  
  Module4.publicMethod();

  /* private methods are usually started with _ */

  var Module5 = (function () {
    var _privateMethod = function () {
  
    };
    var publicMethod = function () {
  
    };
  })();

// returning and anonymous Object: 

  var Module6 = (function () {
    var _privateMethod = function () {
  
    };
    var publicMethod = function () {
  
    };
    return {
      publicMethod: publicMethod,
      anotherPublicMethod: anotherPublicMethod
    }
  })();