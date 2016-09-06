// this is in es5
var createGreeting = function(message, name){
  return message + name;
}

// becomes in es6
var arrowGreeting = (message, name) => message + name;

// with only 1 parameter:
var arrowGreeting = message => "hello";


// without block scoping prints out "bye"
var message ="hi";

{
var message = "bye"
}
console.log(message);


// with block scoping prints out "hi"
let message ="hi";

{
let message = "bye"
}
console.log(message);
