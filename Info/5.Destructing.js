// Copying the values to new variables as per the structure.
let salary = [2000, 3000, 4000]
let [low, med, high] = salary;
console.log(low, med, high); //2000, 3000, 4000


let salary = [2000, 3000]
let [low, med, high] = salary;
console.log(low, med, high); //2000, 3000, undefined


let salary = [2000, 3000, 4000]
let [low, , high] = salary;
console.log(low, high); //2000,  4000


let salary = [2000, 3000, 4000]
let [low, ...rest] = salary;
console.log(low, rest); //2000,  [3000, 4000]


let salary = [2000, 3000]
let [low, med, high = 5000 ] = salary;
console.log(low, med, high ); //2000, 3000, 5000


let [minCode, maxCode ] = "AZ"
console.log(`Min Code - ${minCode}, Max Code - ${maxCode}` ) // Min Code - A, Max Code - Z

let [minCode, maxCode ] = [,]
console.log(`Min Code - ${minCode}, Max Code - ${maxCode}` ) // Min Code - undefined, Max Code - undefined

// Undefined Or nulls are not Iterables
let [minCode, maxCode ] = undefined
console.log(`Min Code - ${minCode}, Max Code - ${maxCode}` ) // Uncaught TypeError: undefined is not iterable


let [minCode, maxCode ] = null
console.log(`Min Code - ${minCode}, Max Code - ${maxCode}` ) // Uncaught TypeError:  null is not iterable


try{
    let [minCode, maxCode ] = undefined
}catch(e){
    console.log(e.message)// undefined is not iterable
}


// => It executes only once
let count = 0;
for(let [a,b] of [[5, 20]]){
    console.log(`${a} ${b}`); // 5 20
    count++;
}
console.log(`${count}`);// 1 
/* ================= Object Literals ======================== */


let salary = {
    low: 2000,
    med: 4000, 
    high: 6000
};

let {low, med, high } = salary;

console.log(high); // 6000

// => We can rename the property names of eisting Object

let salary = {
    low: 2000,
    med: 4000, 
    high: 6000
};

let {low: newLow, med: newMed, high: newHigh } = salary;
console.log(newHigh); // 6000

// => we can do normal assignment tooo...
let salary = {
    low: 2000,
    med: 4000, 
    high: 6000
};
let newLow, newMed,  newHigh; 
( {low: newLow, med: newMed, high: newHigh } = salary); // We need to use ( paranthesis ), because JS does understand { } this as an Object Or Block
console.log(newHigh); // 6000