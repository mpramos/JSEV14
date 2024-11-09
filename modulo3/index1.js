//! OPERADORES DE ASIGNACION
    let nombre='juana'
//! OPERADORES DE ASIGNACION COMPUESTA
let edad=30
console.log(edad);
// edad=edad+1
edad+=1
console.log(edad);
// edad=edad+1
edad+=1
console.log(edad);
edad-=1
console.log(edad);
edad*=2
console.log(edad);
let x=10
x+=2 // x+2 =12
x-=4 //x=8
x*=3
console.log(x);
//!PRECEDENCIA
console.log(2+2*2); //6
console.log((2+2)*2); //8

let string='1233'
let n1=-string
let n2=-n1
console.log(n2);
console.log(typeof n2);

//! Operadores de incremeneto y decremento
//? Prefijos ++Operando y sufijos Operando ++
let incr=0
console.log(incr++);//0
console.log(incr);//1
let incrP=0
console.log(++incrP);
console.log(incrP);


const valorInicial=0
const boolN=Boolean(0)
const boolA=Boolean(-1)
console.log(boolA);
const boolS=Boolean('')
const boolSA=Boolean('hola')
console.log(boolSA);

//!OPERADORES LÒGICOS

//?not
    console.log(!0);
    console.log(!'');
    console.log(!false);
    console.log(!1);
    console.log(!'hola');
    console.log(!true);
    
//?and
//TODO SIEMPRE Y CUANDO TODOS LOS OPERANDOS SEAN VERDADEROS 
//* por más operandos que tengamos nos va a mostrar siempre el valor de la derecha
console.log(2 && 1);
console.log(1 && 2 && 3)
//?or
console.log(0 || 1);
console.log(1 || 0);
console.log('' || 'HOLA');
console.log('HOLA' || '');
console.log(''||0);
console.log(0||'');
console.log(0|| false);

//!Operadores de Cadena
console.log('hola'+' ' + 'como estas');
console.log(2+'0');
console.log(typeof (2+'0'));


let cadenaInicial='hola'
// cadenaInicial =cadenaInicial+ ' como estas'
cadenaInicial +=' como estas'
console.log(cadenaInicial);

let valor=true
valor &=false
console.log(valor);


//!Operadores de comparación 
//? Comparación estricta ====
console.log(1==='1'); //false
console.log('24'===24); //false
console.log('hola'==='hola');
console.log(true===true);
//? Desigualdad estricta !==
console.log(1!=='1'); //false
console.log('24'!==24); //false
console.log(45!=24); //true
//? Desigualdad  !=
console.log(1!='1'); //true
console.log('24'!=24); //true
console.log(45!=24); //true

//? Comparación ==
    console.log(1=='1'); //true
    console.log('24'==24); //true
    console.log('hola'=='hola');
    console.log(true==true);

    // ABCD abcde 

    //!otros tipos de dataos
// typeof
    console.log(typeof 'hola');
    
    
    console.log(typeof {name:'juan', avatar:'🧑'} );
    
    console.log(typeof ['juan','alicia','andrea']);
    
    // instanceof

    console.log(['🧑','✨']instanceof Array);
    console.log('🧑' instanceof Array);

    //?Operador ternario
    console.log('se te antoja comer pizza'? '🍕':'🍔');
    console.log(''? '🍕':'🍔');

    let edadN=17
    console.log(edadN>=18?'🚗':'👶');


    
    
    








