// .call() and .apply() allows us to pass in a scope to a function

var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
  (function () {
    console.log(this);
  }).call(links[i]);
}

// .call() or .apply() invokes the function, so
// you need to call it like this: 

myFunction.call(scope); // invoke myFunction using .call()

// .bind() does NOT invoke a function, only binds.
// instead of : 

nav.addEventListener('click', function () {
    toggleNav(arg1, arg2);
  }, false);

// it can be done like this: 

nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);

