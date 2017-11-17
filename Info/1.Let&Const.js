/*
 => If you Use LET Key word for declaring Varables, There wil be no Variable Hoisting.
 => By Using LET Key word, we make sure that variable declaration takes place before it gets used.
 
 */

console.log('Product Id', prodId); // Undefined
var prodId = 12;

console.log('Product Id', prodId); // ReferenceError: prodId is not defined
let prodId = 12;


let prodId = 12;
console.log('Product Id', prodId); // 12

let prodId;
console.log('Product Id', prodId); // undefined


// => LET uses Block-Level Scope
let prodId = 12;
{
    let prodId = 2000;
}
console.log('Product Id', prodId); // 12

// => LET uses Block-Level Scope
{
    let prodId = 2000;
}
console.log('Product Id', prodId); // ReferenceError: prodId is not defined


//=> Since for loop using var key word, it becomes updated on eveary iteration, Because var is not a local scope.
let updateFunctons = [];

for(var i =0; i < 2; i++){
    updateFunctons.push(function(){ return i;})
}
console.log(updateFunctons[0]()) // 1
console.log(updateFunctons[1]()) // 1

//=> If we use LET keyword, i value becomes local scope - SO I values updates instantly 
let updateFunctons = [];

for(let i =0; i < 2; i++){
    updateFunctons.push(function(){ return i;})
}
console.log(updateFunctons[0]()) // 0
console.log(updateFunctons[1]()) // 1



/*
const
===== 
*/

const MAX_VAL = 200;
console.log(MAX_VAL) // 200


const MAX_VAL = 200;
MAX_VAL = 300;
console.log(MAX_VAL) // Type Error : Assignment to a constant value


const MAX_VAL; // Syntax Error : Unexpeted Token ; , i.e const variable needs to be initialized when it gots declared.


const MAX_VAL = 300;
{
    const MAX_VAL = 200;
}
console.log(MAX_VAL); // 300

