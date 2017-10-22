'use strict';

var getPrice = () => 5.99;

console.log(typeof getPrice) // function
console.log(getPrice()) // 5.99

var getPrice = count => count * 12;
console.log(getPrice(5)) // 60

var getPrice = (count , tax) => count * 12 * (1 + tax);
console.log(getPrice(5, 10)) // 600

// If we are writing some expressions we can use { }, but we should return some value
var getPrice = (count, tax) =>{
    let price = count * 12;
    price = price * (1 + tax);
    return price;
}


// => Arrow funcitons can used mostly to make a scope / context existance of 'this' keyword

document.addEventListener('click', function(){
    console.log(this) // #document
}) 

document.addEventListener('click', function(){
    console.log(this) // Window { ... } 
}) 


// => If we decalre an Arrow function, we can't be able to access their constructors / prototypes

var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('prototype')) // false



var invoice = {
    number : 123,
    process : function(){
        return () => console.log(this.number) 
    }
}

invoice.process()() // 123



// => In JS we can't bind a new Oject to Arrow Function
var invoice = {
    number : 123,
    process : function(){
        return () => console.log(this.number) 
    }
}

invoice.process()()

var newInvoice = {
    number : 343
}

invoice.process().bind(newInvoice) (); // 123
invoice.process().call(newInvoice) (); // 123

//====================================================================

/*
    Default arguments for the functions
*/

var getPrice = (price, tax = price * 0.7) => console.log(price + tax) 
getPrice(6) // 10.2

var getPrice = (price = 10, tax = 0.7) => console.log(price + tax) 

getPrice(undefined, 6) // 16


// => we can access the variable of the current context in side the functions
var baseTax = 0.7
var getPrice = (price = 10, tax = price * baseTax) => console.log(price + tax) 
getPrice(6) // 10.2


// => we can access the Functions of the current context in side the functions
var getBaseTax = () => 0.7
var getPrice = (price = 10, tax = price * getBaseTax()) => console.log(price + tax) 
getPrice(6) // 6.2


// => if we want to get an in-bult properties / behavours like arguments, prototype, length, etc... We need to use function key word, instead => (arrow Function)  
let getBaseTax = () => 0.7
let getPrice = function (price = 10, tax = price * getBaseTax()) { console.log(arguments.length) } //1
getPrice(6) // 


// => arguments.length is not depends on function paramets, it depends on function call i.e. the number of parameters sent on function call
let getBaseTax = () => 0.7
let getPrice = function (price = 10, tax = price * getBaseTax()) { console.log(arguments.length, price + tax) } // 2, 12
getPrice(6,6) // 6.2


//=> we can't use variables before it's declaration
let getBaseTax = () => 0.7
let getPrice = function (price = tax, tax = 0.7) { console.log( price + tax) }
getPrice() // Reference Error , tax is not defined


let getBaseTax = () => 0.7
let getPrice = function (price = tax, tax = 0.7) { console.log( price + tax) }
getPrice(6) // 6.7

// => we can write the function using 'new Function(args, body)' 

let getPrice = new Function( "price", "return price");
console.log(getPrice()) // 20

let getPrice = new Function( "price = 20", "return price");
console.log(getPrice(20))