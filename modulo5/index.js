let nombre1='susana'
console.log(`Buen dia ${nombre1}`);
console.log(`Buenas tardes ${nombre1}`);
console.log(`Buenas noches ${nombre1}`);

let nombre2='valeria'
console.log(`Buen dia ${nombre2}`);
console.log(`Buenas tardes ${nombre2}`);
console.log(`Buenas noches ${nombre2}`);

let nombre3='rodrigo'
console.log(`Buen dia ${nombre3}`);
console.log(`Buenas tardes ${nombre3}`);
console.log(`Buenas noches ${nombre3}`);

function saludar() {
    console.log(`Buen dia`);
    console.log(`Buenas tardes`);
    console.log(`Buenas noches`);
}

saludar()


function calcularPrmedio(temperaturas) {
    let sum=0
    let numeroElementos= temperaturas.length
    for (const temperatura of temperaturas) {
        sum+=temperatura
    }
    let promedio= sum/numeroElementos
    console.log(promedio);
}

let temperaturas1=[23,11,11,14,15,11,12,11,11]
calcularPrmedio(temperaturas1)
let temperaturas=[23,12,11,14,15,11,12,13,15]
calcularPrmedio(temperaturas)



function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}
console.log(factorial(6)); // -> 720
// n!=n∙(n-1)∙(n-2)∙... ∙2∙1
6!=6*5*4*3*2*1
6!=6*5!=720
5!=5*4!
4!=4*3!=>4*6
3!=3*2!=>3*2=6
2!=2*1!=>2
1!=1
5!=5*4*3*2*1
4!=4*3*2*1
3!=3*2*1
2!=2*1
1!=1

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(6)); // -> 720

function sumar(a,b) {
    return a+b
}
let suma=sumar
console.log(suma(2,3));
console.log(typeof suma);


function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function operation(func, first, second) {
    return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200



function add(a, b) {
     return a + b;
}
function multiply(a, b) {
     return a * b;
}
function operation(func, first, second) {
     return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

let miadd=function myadd(a,b) {
    return a+b
}
console.log(miadd(4,5));




let myAdd = function add(a, b) {
    return a + b;
}
console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

let sumar=function (a,b) {
    return a+b
}
console.log(sumar(4,5));



let myAdd = function(a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30


function operation(func, first, second) {
    return func(first, second);
}
console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200


let inner = function() {
    console.log('inner 1');
}
let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');

function saludar(nombre1,nombre2) {
    let sum=0
    console.log('Hola '+ nombre1 + ' '+ nombre2+' '+ sum);
    return sum
}
// saludar('Susana', 'alberto')
console.log(saludar('Ana','Carlos'));

function dividir(a,b) {
    let division=a/b
    return division
}
//  let resultado= dividir(8,4)
//  console.log(resultado);
 console.log(dividir(5,6));
 
 
 let global='global'

 function comportamientoGlobalLocal() {
    let global='sombra del global'
    let local='local'
    console.log(global, local);
}
comportamientoGlobalLocal()

console.log('Hola susana' );
console.log('Hola alberto' );
console.log('Hola jaime' );

let emojis1=['🐱‍👤','😎','😣','👨']
let emojis2=['🐱‍👤','😊','🤔','😃']
let emoji4='aha'
let emoji5=5
let emojis3=['🐱‍👤','🍇','🍐','🍎']

// function mostrarEmoji(coleccion) {
//     if (coleccion instanceof Array) {
//         for (const emoji of coleccion) {
//             console.log(emoji);
//         }
//     }else{
//         console.log('los parametros no estan siendo validos , debes enviar una coleccion de datos');
//     }
// }
function mostrarEmoji(coleccion) {

    if(!(coleccion instanceof Array)){
        return 'No se cumple con los parametros correspondientes, debe ingresar una coleccion'
    }
    let nuevaColeccion=[]
    for (const emoji of coleccion) {
        nuevaColeccion.push(emoji+' 🐱‍👤')
    }
    return nuevaColeccion
}
let emoji8=8
console.log(mostrarEmoji(emoji8));
n!=n*n-1*n-2*n-3..1
6!=6*5*4*3*2*1
function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}
console.log(factorial(6)); // -> 720



function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(6)); // -> 720

6!=6*5*4*3*2*1 => 6*5!=720
5!=5*4*3*2*1 => 5*4!=
4!=4*3*2*1 => 4*3!=4*6
3!=3*2*1 =>3*2!=3*2=6
2!=2*1 =>2*1!=2*1=2
1!=1 =1

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(6)); // -> 720


let sumar=function (a,b) {
    return a+b
}
console.log(sumar(2,3));

function saludar(nombre) {
    return 'Hola' + nombre
}
function operacion(funcion,nombre) {
    return funcion(nombre)
}

console.log(operacion(saludar,'Juan'));


console.log('mensaje 1');
console.log('mensaje 2');
function saludar(nombre) {
    return 'Hola '+nombre
}
console.log(saludar('Juan'))
console.log('mensaje 4');






console.log('MENSAJE 1');
console.log('MENSAJE 2');

function darNombre() {
    console.log('MENSAJE 3')
}

setTimeout(darNombre,3000 );
console.log('MENSAJE 4');



    let inner = function() {
    console.log('inner 1');
    }
    let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function(){
         clearInterval(timerId);
    }, 5500);
    }
    console.log('test 1');
    outer(inner);
    console.log('test 2');


    function restar(a,b) {
        return a-b
    }

    console.log(restar(4,3));
const restar=(a,b)=>a-b
const sumar=(a,b)=>a+b
const dividir=(a,b)=>a/b


console.log(restar(5,3))
console.log(sumar(5,3))
console.log(dividir(5,3))




       
    
    








