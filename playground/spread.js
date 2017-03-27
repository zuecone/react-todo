// function add (a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));
//


var groupA = ['john','jakob'];
var groupB = ['Stephan','Chris'];
var final = [3,...groupA,...groupB];

console.log(final);
//this will return:
//[ 3, 'john', 'jakob', 'Stephan', 'Chris' ]


var person = ['Henry',35];
var personTwo = ['Andrew',25];

function sayHello(a,b){
  console.log("Hello " + a + ", you are " + b + ".");
}
sayHello(...person);
//Hello Henry, you are 35
sayHello(...personTwo);
//Hello Andrew, you are 25

var names = ['Mike','Ben'];
var final = ['Andrew',...names];

final.forEach(function(name){
  console.log("hi " + name);
});
//prints in one go:
//hi Andrew
//hi Mike
//hi Ben
