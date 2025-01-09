//! Destrucción Arreglo y objetos

const numbers=[1,2,3]
let [numero1, ,numero3]= numbers
console.log(numero3);
const names=[undefined,'Juan','Alejandro']
let [
    primerNombre='Alejandra',
    segundoNombre,
    tercerNombre,
    cuartoNombre='Jose'
    ]=names
console.log(primerNombre, segundoNombre, tercerNombre, cuartoNombre);
console.log(names);

const fullstack=[
    ['HTML','CSS','JS','React'],
    ['Node','Expres','MongoDB'],
]
for (const [first,second,third, c] of fullstack) {
    console.log(first,second,third,c);
}


const [frontend,backend]= fullstack
console.log(frontend);
console.log(backend);
const numeros=[1,2,3,4,5,6,7,8,9,10]
let [num1,num2,...rest]=numeros
console.log(num1, num2);
console.log(rest);
let [num3,num4,num5, ...rest1]=rest
console.log(num3,num4,num5);
console.log(rest1);

const countries=[['Argentina','Buenos Aires'],['Colombia','Bogota'],['Peru','Lima']]

for (const [country, city] of countries) {
    console.log(country, city);
    
}

const rectangle={
    width:20,
    height:10,
    area:200
}
// let {area:a, height:h, width:w, perimeter:p=60}= rectangle
// console.log(w);
// console.log(h);
// console.log(a);
// console.log(p);
// console.log(rectangle);

const calculatePerimeter= rectangle =>{
    return 2 * (rectangle.width+rectangle.height)
}
console.log(calculatePerimeter(rectangle));

const todoList=[
    {
        task:'Prepare Js Test 1',
        time:'20/12/20240',
        completed:true
    },
    {
        task:'Prepare Js Test 2',
        time:'20/12/20240',
        completed:true
    },
    {
        task:'Prepare Js Test 3',
        time:'20/12/20240',
        completed:false
    },
    {
        task:'Prepare Js Test 4',
        time:'20/12/20240',
        completed:true
    },
]

for (const {task,time,completed} of todoList) {
    console.log(task, time, completed);
}

const evens=[0,2,4,6,8,10]
const evenNumber=[...evens]
evenNumber.push(12)
console.log(evenNumber);
console.log(evens);

const odds=[1,3,5,7,9]
const oddsNumber=[...odds]
console.log(oddsNumber);

const frontendd=['HTML','CSS','JS','React']
const backendd=['Node','Express','MongoDB']
const fullstackk=[...frontendd,...backendd]
console.log(fullstackk);

const user={
    name:'juana',
    title:'Programmer',
    country:'Bolivia',
    city:'Cochabamba'
}
let copiedUser={...user, title:'instructor', phone:'234234'}
console.log(copiedUser);
console.log(user);

const sumAllNums=(...args)=>{
    let sum=0
    for (const num of args) {
        sum +=num
    }
    return sum

}
console.log(sumAllNums(1,2,3,4,5));
