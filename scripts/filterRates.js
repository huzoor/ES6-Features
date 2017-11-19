import {Rates} from './rates.js';

// var filter = {address: 'England', name: 'Mark'};
// users = users.filter(function(item) {
//     for(var key in filter) {
//         if(item[key] === undefined || item[key] != filter[key])
//             return false;
//     }
//     return true;
// });

// let filteredRatesList = Rates.map((item)=>{
//     return {
//         term : item.TermMileage.Term,
//         Mileage : item.TermMileage.Mileage,
//     }
// })

// let filteredList = Rates.filter((item)=> item.TermMileage.Term == 24)
// let filteredList = Rates.sort(function(a,b) { return a.TermMileage.Term - b.TermMileage.Term; } );

var results = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = Rates.length, id; i < len; ++i) {
    id = Rates[i].TermMileage.Term + '-'+Rates[i].TermMileage.Mileage;
    if (idsSeen[id] !== idSeenValue) {
        results.push(Rates[i]);
        idsSeen[id] = idSeenValue;
    }
}

console.log('filteredRatesList',results    )