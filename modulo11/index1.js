let n=new Number(100.123)
let fixed=n.toFixed(2)
// console.log(fixed);
let test1= Number.isInteger(100)
let test2= n.isInteger(100)
console.log(test1);
console.log(test2);

// PRIMER GRUPO
// Boolean, Number, String, Date
// SEGUNDO GRUPO
// Array, Set,Map, Object
// TERCER GRUPO
// JSON, Math, RegExp

let strObj= new String('Do bats eat cats?')
console.log(typeof(strObj));
console.log(strObj.length);
let words= strObj.split(" ")
console.log(words[0]);


let boolOBj1= new Boolean
let boolOBj2= new Boolean(true)
let str1= boolOBj1.toString()
// let bool2= boolOBj2.valueOf()
console.log(`bool2: ${typeof str1} : ${str1}`);
// console.log(`bool2: ${typeof bool2} : ${bool2}`);


let bool1= Boolean(false)
let bool2= Boolean(0)
let bool3= Boolean("")
let bool4= Boolean(null)
let bool5= Boolean(undefined)
let bool6= Boolean(NaN)

console.log(`bool2: ${typeof bool1} : ${bool1}`);
console.log(`bool2: ${typeof bool2} : ${bool2}`);
console.log(`bool2: ${typeof bool3} : ${bool3}`);
console.log(`bool2: ${typeof bool4} : ${bool4}`);
console.log(`bool2: ${typeof bool5} : ${bool5}`);
console.log(`bool2: ${typeof bool6} : ${bool6}`);





let a = 10; // decimal - default
let b = 0x10;   // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1));    // -> 0.9
console.log(x / 0);      // -> Infinity
console.log(x / "abc");  // -> NaN

let nrStr1=(11).toString()
let nrStr2=(11).toString(16)
console.log(`bool2: ${typeof nrStr1} : ${nrStr1}`);
console.log(`bool2: ${typeof nrStr2} : ${nrStr2}`);






let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0
console.log(`numberObj1 : ${typeof numberObj2} : ${ numberObj2.valueOf()}`); // -> numberObj1 : object : 0
console.log(`numberObj1 : ${typeof numberObj3} : ${ numberObj3.valueOf()}`); // -> numberObj1 : object : 0
console.log(`numberObj1 : ${typeof numberObj4} : ${ numberObj4.valueOf()}`); // -> numberObj1 : object : 0
console.log(`numberObj1 : ${typeof numberObj5} : ${ numberObj5.valueOf()}`); // -> numberObj1 : object : 0

let nr=Number('100')
console.log(`numberObj1 : ${typeof nr} : ${ nr.valueOf()}`); // -> numberObj1 : object : 0

// El primero de estos métodos devuelve una cadena que representa un número 
// en forma exponencial, con un dígito antes de la coma, 
// redondeado a `fractionDigits` después de la coma.
let ab= 12345
console.log(ab.toExponential());
console.log(ab.toExponential(1));



let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550
let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
// let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','');
console.log(words);
console.log(words.length); // -> 30



let a = text.toLowerCase();
let b = a.replaceAll('.','');
let c = b.replaceAll(',','');
let word = c.split(' ');



let text = "One, two, three, one, two, three.";
console.log(text.includes("two")); // -> true
console.log(text.includes("four")); // -> false
console.log(text.indexOf("two")); // -> 5
console.log(text.indexOf("four")); // -> -1
console.log(text.lastIndexOf("two")); // -> 22

let text = "One, two, three, one, two, three.";
// console.log(text.substr(0,8)); // -> One, two
// console.log(text.substr(10)); // -> three, one, two, three.
// console.log(text.substr(-6)); // -> three.
// console.log(text.substr(-6, 2)); // -> th
// console.log(text.substring(5, 8)); // -> two
// console.log(text.substring(5)); // -> two, three, one, two, three.
// console.log(text.substring(-11, 8)); // -> One, two

console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three.
console.log(text.slice(-11, -8)); // -> two


let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(`string ${numbers[i]}=> ${String(numbers[i]).padEnd(10, '0')}`);
    console.log(`string ${numbers[i]}=>${String(numbers[i]).padEnd(10, 'abc')}`);
    console.log(`string ${numbers[i]}=>${String(numbers[i]).padEnd(10)}`);
}



let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.length);

console.log(city.trimLeft().length); // -> 8 -> "Bergen  "
console.log(city.trimRight().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"


let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT


let now = Date.now(); // timestamp
let nowObj = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj} : ${nowObj}`);

let date1 = new Date("2020-07-08");
let date2 = new Date("2020-07-08T10:20:00");
let date3 = new Date("2020-07-08T10:20:00Z");

console.log(date1);
console.log(date2);
console.log(date3);

let date1 = new Date(2020, 6, 8, 10, 20, 0);
let date2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date2.getTime() - date1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24




let startTime = Date.now();
for(i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime);



let emojis=['🐱‍👤','👍','🐀',3]
emojis.forEach((emoji, index) => {
    console.log(`indice : ${index} => elemento : ${emoji}`);
});
console.log(emojis.some(emoji=> typeof emoji ==='number'));
console.log(emojis.every(emoji=> typeof emoji ==='string'));
let dogs=['🐕','🐩','🐕‍🦺','🦮']
let numeros=[1,2,3,4,5]
let cuadradoNumeros= numeros.map(numero=>{ 
    let cuadrado=numero*numero
    return cuadrado})
console.log(cuadradoNumeros);

let dogsT=dogs.map((dog, index)=> ` indice:${index} ${dog} ${dog}` )
console.log(dogsT);
console.log(dogs);
let dogsI=[
    {
        dog:'🦮',
        name:'dog1',
        age:1
    },
    {
        dog:'🐕‍🦺',
        name:'dog2',
        age:2
    },
    {
        dog:'🐩',
        name:'dog3',
        age:2
    },
    {
        dog:'🦮',
        name:'dog4',
        age:3
    },
]

let dogsO= dogsI.map(dog=>{
    return {
        ...dog,
        owner:'👩'
    }
})
console.log(dogsO);

const foods=['🥩','🍤','🍳','🍗','🥘','🍲','🥐','🥙','🍿']
const foodsG= foods.filter(food=>!(food==='🥐' || food==='🍿'))
console.log(foodsG);

const notas=[
    {
        name:'student1',
        img:'👨',
        age:38,
        score:80
    },
    {
        name:'student1',
        img:'👩‍🦰',
        age:28,
        score:60
    },
    {
        name:'student1',
        img:'👦',
        age:22,
        score:50
    },
    {
        name:'student1',
        img:'🧒',
        age:18,
        score:30
    },
]

console.log(notas.sort((a,b)=>{
    if (a.score < b.score) return -1
    if (a.score < b.score) return 1
    return 0
} ));


let estudiantesAprobados= notas.filter(alumno=>alumno.score >=51)
// console.log(estudiantesAprobados);
 let notaAlta= notas.find(alumno=> alumno.score > 70)
 console.log(notaAlta);
 

const numbers1=[1,2,3,4,5]
// 1+2+3+4+5=15
const sum=numbers1.reduce((acc, number)=>acc+number,0)
const mul=numbers1.reduce((acc, number)=>acc*number,1)
console.log(sum);
console.log(mul);

const ages=[24,22,25,32,35,17,18]
const age= ages.find(age=>age<20)
const result= ages.findIndex(age=>age<20)
// console.log(age);
console.log(result);
const products=['Milk','Coffee','Sugar','Apple','Carrot']
console.log(products.sort());
const numbers2=[100,90,70,45,200]
console.log(numbers2.sort((a,b)=>a-b));
console.log(numbers2.sort((a,b)=>b-a));






























