var a= 5
var b= 10
var sum=a+b
console.log(sum)


var nombre='jose'
let edad=34
console.log(nombre);
console.log(edad);


const gravedad=9.81

console.log(gravedad);


let emojiGafas='😎' //global
{
    console.log(emojiGafas);
    
    let emojiRisa='😀'
    console.log(emojiRisa);
    {
        let emojiTriste='😢'
        console.log(emojiTriste);
        console.log(emojiRisa);
        console.log(emojiGafas);
    }
    console.log(emojiTriste);
    
}
console.log(emojiRisa);

let contador=9
{
    let contador=30
    console.log(contador);
}

var usuario='🧑'
var usuario='👩‍🦰'
{
    console.log(usuario);
    var usuario='😎'
    var objeto='⭐'
    console.log(usuario);
    {

    }
}
console.log(objeto);
console.log(usuario);

var saludo='hola'
function test() 
{
    var nombre='Jose'
    console.log(saludo);
    console.log(nombre);
}
test()
console.log(nombre);

let paisUno
paisUno='Bolivia'
console.log(paisUno);

const pais='Bolivia'
console.log(pais);

// String nombre=''
// int numero='maria'
// float numero=7.8 
// boolean bandera=true



//! TIPOS DE DATOS PRIMITIVOS
//* texto ->'Susana' = cadena|string
let nombre='Susana'
{
    nombre=true
    console.log(nombre);
    
}

let paisU=`Boliva`
let mensaje=`mensaje : ${paisU}`
console.log(mensaje);
console.log(typeof mensaje);
//* UNDEFINED
let nombreF
console.log(nombreF);
console.log(typeof nombreF);
//* NULL
let caja=null
console.log(caja);
console.log(typeof caja);



//* numero ->45 entero | 45.6 decimal
let edadS=45 //-> valor (tipos de datos)
let edadSu=45.6
let numeros=1232432434123343434
console.log(numeros);
console.log(typeof (1/0));
console.log(typeof (2*3));
console.log(typeof (2+3));
console.log(typeof (2-3)); //-1

// console.log(typeof (2*'h'));
console.log((2*'h')); //NaN
//* BIGTINT
let numeroGrande=12312312324234353454654623424343543546456n
console.log(numeroGrande);
console.log(typeof numeroGrande);

console.log(typeof null); null
let nombre=null
console.log(nombre);


//* boolean ->true | false
let isFalse=true
isFalse=false

let nombreP='pedro'
console.log(nombreP);

//* operadores *+-/% typeof (!operador)
console.log(typeof nombreP);
console.log(typeof isFalse);

//! TIPOS DE DATOS COMPLEJOS





