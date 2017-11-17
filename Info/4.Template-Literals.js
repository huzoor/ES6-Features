// ES6 TEMPLATE - LITERALS

let invoiceNum = 12333;
console.log(`Invoice Number : ${invoiceNum}`) //Invoice Number : 12333
console.log(`Invoice Number : \${invoiceNum}`) //Invoice Number : ${invoiceNum}

// We can add expressions als in the ${....} this block
console.log(`Invoice Number : ${"INV-"+invoiceNum}`) //Invoice Number : INV-12333


// The interpolation takes first, before the function call
function showMessage(message){
    let invNum = 90;
    console.log(message) //Invoice Number : 1300
}
let invNum = 1300;

showMessage(`Invoice Number : ${invNum}`)

/* ================================================================ */

// => New Lines also maintained 
let message = `<b>Answer My Question</b>
Yes, I can
`;
document.getElementById('demo').innerHTML = message;
console.log(message) //<b>Answer My Question</b>
                     //Yes, I can


/* ================================================================ */
// we can pass plain `template` without paranthesis, but it will be passed as an array

function processInvoice(segments){
    console.log(segments) //["template", raw:  ["template"] ]
}
processInvoice `template`;


/* ================================================================ */
// Text segments & Values will be devided as shown below

function processInvoice(segments, ...values){
    console.log(segments) // ["Invoice : ", " For ", " ", raw: Array(3)]
    console.log(values) //[1322, 150000]
}

let invNum = 1322;
let amount = 150000
processInvoice `Invoice : ${invNum} For ${amount} `;