import {Rates} from './rates.js';
let defaultTerm = 20, deductible = 0, defaultValue = '';
let holder = {}, allTerms = [], ratesArray = [];
let termRatesArray = Rates.map((item)=> {
    if(item.Deductible.DeductAmt == deductible){
        if(allTerms.indexOf(item.TermMileage.Term) < 0) allTerms.push(item.TermMileage.Term)
        if(holder.hasOwnProperty(item.TermMileage.Term)) {
        holder[item.TermMileage.Term].push(item.TermMileage.Mileage);
        } else { 
        holder[item.TermMileage.Term] = new Array();      
        holder[item.TermMileage.Term].push(item.TermMileage.Mileage);
        }
    }

    return item.TermMileage.Term +"/"+item.TermMileage.Mileage;
});

const getClosest = (goal) =>{
    return allTerms.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
}
console.log(holder, allTerms);
if (holder.hasOwnProperty(defaultTerm)) {
    console.log(holder[defaultTerm])
    if(holder[defaultTerm].length > 0) defaultValue = defaultTerm +'/'+holder[defaultTerm][0]
}else{
    let nextTerm = getClosest(defaultTerm);
    console.log(nextTerm)
    if(nextTerm !== null && nextTerm !== undefined ) defaultValue = nextTerm +'/'+holder[nextTerm][0]
}

console.log(termRatesArray, defaultValue, termRatesArray.indexOf(defaultValue)+1)
