let suma=(a b)=>a+b

console.log(suma(2,3));



try {
    consol.log(4)
} catch (error) {
    console.log(error);
}
console.log(4)
console.log('hola')
console.log(4)

console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

let dato=4
console.log(typeof dato==='number' ? Math.sqrt(dato):'Dato no permitido');
console.log(typeof Math.sqrt('hola'));


console.log(Math.pow(2, 3)); // -> NaN
console.log(Math.pow("abc", "def")); // -> NaN



"use strict";
if (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}

let b=3
let a=b
console.log(a);


restar()

const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
console.log(someNumber.length);



// let nombres=['juana','juan']
let nombres= Array(2)
console.log(nombres);

let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);
console.log('hola');


try {

} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2

try {
    throw new Error('Algo salio mal') 
} catch (error) {
    console.log('Error capturado '+ error.message);
    
}

try {
    throw 404
    
} catch (error) {
    console.log('error capturado ' + error);
    
}


const validacionNumero=(num)=>{
    if (typeof num!=='number') {
        throw new Error('el valor debe ser un numero')
    }
    console.log('numero valido ' + num);
    

}

try {
    validacionNumero(8)
} catch (error) {
    console.log('error capturado ' + error.message);
    
}