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

let objeto = {
    nr:600,
    str:'text'
}
console.log(objeto.nr);
console.log(objeto.str)
 let nombre='maria' // string|cadena
 console.log(nombre);
 let edadM=40 // numero
 let avatar='👩‍🦰'
 let nombreJ='Juan' // string|cadena
 console.log(nombre);
 let edadJ=40 // numero
 let avatarJ='😎'
 console.log(avatar);
 let puntos=30
 let usuario1= {
    nombre:'maria', // string
    edad:40, //numero
    avatar:'👩‍🦰',
    puntos:30
 }
 let usuario2= {
    nombre:'juan', // string
    edad:45, //numero
    avatar:'🧑',
    puntos:20
 }
 let usuario3= {
    nombre:'roberto', // string
    edad:50, //numero
    avatar:'🧑',
    puntos:20
 }
console.log('EDAD DE ANTES');

console.log(usuario3.edad);
usuario3.edad=51
usuario3.avatar='👨‍🎓'
console.log('EDAD DESPUES');
console.log(usuario3.edad);
console.log(usuario3);
console.log('ELMINACION DE PUNTOS');

delete usuario3.puntos
console.log(usuario3);
//?Arreglo

let diasSemana=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
console.log(diasSemana);
console.log('INDICE');

console.log(diasSemana[3]);

let emojis=['🧑','😎','👩‍🦰','⭐']
console.log(emojis);
console.log(emojis[3]);
emojis[1]='🐱'
console.log(emojis);

//  let animales=['🐱','🐶','🐢','🐱‍👤']
let animales=[]
console.log('ANTES ');

console.log(animales);
animales[0]='🐱'
animales[1]='🐶'
animales[2]='🐢'
animales[3]='🐱‍👤'
console.log('despues ');
console.log(animales);


let cajaCadaTipo=['maria',67,true,undefined]
console.log(cajaCadaTipo[2]);

// ANIDADAS
let coleccionArreglos=[['😃','😁','🥺'],['👩‍🦰','🧑','👨'],['👮‍♀️','👮‍♂️','🕵️‍♀️']]

console.log(coleccionArreglos[2][2]);


console.log(coleccionArreglos);
console.log('CARITAS');
console.log(coleccionArreglos[0]);
console.log('CARITAS DE PERSONAS');
console.log(coleccionArreglos[1]);
console.log('CARITAS DE POLICIAS + DETECTIVE');
console.log(coleccionArreglos[2]);

let usuarios =[
    {nombre:'maria',avatar:'👩'},
    {nombre:'juan',avatar:'🧑'},
    {nombre:'jose',avatar:'🤴'}
]
console.log(usuarios[0].avatar);
console.log(usuarios[1]);
console.log(usuarios[2]);

//!PROPIEDADES DE LOS ARREGLOS

const animals=['🐓','🐰','🐱','🐳','🐴','🐓','🐓','🐢']
// const numerosC=[2,45,6,7,8]
// console.log(numerosC.length);
//? IndexOf
// console.log(animals.indexOf('🐢'));
// console.log(animals.indexOf('🐴'));
// console.log(animals.indexOf('🤴')); //-1
// console.log(animals.indexOf('🐓')); 
//? PUSH
animals.push('🐳')
animals.push('🐱‍👤')
animals.push('🧑')
animals.push('👩')
//?POP
// console.log('antes del pop');
// console.log(animals);
animals.pop()
// console.log('despues del pop');
// console.log(animals);
animals.pop()
// console.log(animals);
//? Unshift
animals.unshift('🐶')
animals.unshift('👩‍🦰')
console.log(animals);
//? Shift
animals.shift()
console.log('Despues del shift');
console.log(animals);





























 
 



