/* Anonymous closures are just functions that wrap our code and create an enclosed scope around it. */
(function () {
    'use strict';
    // code here
})();
// strict mode "protects" from more dangerous JS

// exporting

var myModule = (function() {
    'use strict';

    let a = 1;
    let b = 3;
    let _sum = a + b;
    return {
        publicMethod: function() {
            console.log('Hello World! ' + _sum);
        }
    };
})();

myModule.publicMethod(); 
 // myModule.sum(1, 2); // private, cannot be acessed

 // with closures we can create private methods and states

 var myModule2 = (function() {  
    'use strict'; 

    var _privateProperty = 'Hello Wooorld'; 

    function _privateMethod() {
        console.log(_privateProperty);
    }

    return {
        publicMethod: function() {
            _privateMethod();
        }
    };
 })();

 myModule2.publicMethod();
 console.log(myModule2._privateProperty); // undefined
 // myModule2._privateMethod(); 

 /* The Revealing Module Pattern is one of the most popular ways of creating modules. Using the return statement we can return
  a object literal that 'reveals' only the methods or properties we want to be publicly available. */

  var myModule3 = (function() {
      'use strict'; 
      
      let _privateProperty = "Hello 3World";
      let publicProperty = "I am a public property!"; 

      function _privateMethod() {
          console.log(_privateProperty);
      }

      function publicMethod() {
          _privateMethod();
      }

      return {
          publicMethod: publicMethod,
          publicProperty: publicProperty
      };
  })();

  myModule3.publicMethod(); 
  console.log(myModule3.publicProperty);
  console.log(myModule3._privateProperty); // und
  /* myModule3._privateMethod(); 
   */ // TypeError, protected by the module closure

   // 

   const Formatter = (function() {
    console.log('start');

    let timesRun = [];

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const makeUpperCase = (text) => {
        log("Making uppercase");
        timesRun.push(null);
        return text.toUpperCase();
      };  

    return {
        makeUpperCase,
        timesRun,
    }

   })();

   console.log(Formatter.makeUpperCase('jooooooooohn '));
   console.log(Formatter.makeUpperCase('jooooooooohn '));
   console.log(Formatter.makeUpperCase('jooooooooohn '));
   console.log(Formatter.timesRun.length);