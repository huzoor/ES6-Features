// REST refers to gatharing the paramets and putting them all into Single Array
// SPRED refers to spreading the parameters of an Array / String


let showCategories = function (prodId, ...categories){ 
    console.log( categories instanceof Array , typeof categories, categories) // True , Object ,  [Search, Adv, Adds]
};
showCategories(123, 'Search', 'Adv', 'Adds');

showCategories(123) // []
console.log(showCategories.length) // 1 => it Ignores the rest of the args, Because ...categories is not an argument 

let showCategories = function (prodId, ...categories){ 
    console.log(arguments.length ) // 4 => beacuse it depends on function call
};
showCategories(123, 'Search', 'Adv', 'Adds');


let showCategories = new Function("...categories", "return categories");
console.log(showCategories('Search', 'Adv')) // ['Search', 'Adv']

//Getting Max val using ... operator
let prices = [10, 20, 30];
let max  = Math.max(...prices);
console.log('Max Val', max) // 30

//We can create copy of an array using ... operator
let prices = [10, 20, 30];
let newPrices  = [...prices]
console.log('newPrices', newPrices) // [10, 20, 30]

//If we place some empty 
let newPrices  = Array(...[,,,]) 
console.log('newPrices', newPrices) // [undefined, undefined, undefined]

let newPrices  = [...[,,,]] 
console.log('newPrices', newPrices) // [undefined, undefined, undefined]

// We can get max value in an string also, using ... operator => if we use ... the string 02543 nwill became [0,2,5,4,3]
let maxCode  = Math.max(..."02543")
console.log('maxCode', maxCode) //5

let maxCode  = Math.max(..."02q43")
console.log('maxCode', maxCode) //NaN because Math.max() will works on only numbers

let charArr = ["A", ..."BCD", "EF"]
console.log(charArr) //["A", "B", "C", "D", "EF"]