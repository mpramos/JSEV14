const compañias= new Set()
console.log( compañias.size);

compañias.add('Google')
compañias.add('Facebook')
compañias.add('Amazon')
compañias.add('Oracle')
compañias.add('Microsoft')
console.log(compañias.size);
console.log(compañias);
for (const compañia of compañias) {
    console.log(compañia);
}
console.log(compañias.delete('Google'));
console.log(compañias.size);

console.log(compañias.has('Apple'));
console.log(compañias.has('Facebook'));

compañias.clear()
console.log(compañias);


const languages= [
    'English','Spanish','French','English','Spanish'
]
const langSet= new Set(languages)
console.log(langSet);
const counts=[]
const count={}
for (const element of langSet) {
   let filtredLang= languages.filter(lng=> lng===element)
   console.log(filtredLang);//['English','English']
   counts.push({ lang:element,count:filtredLang.length})
   
}
console.log(counts);

let a=[1,2,3,4,5]
let b=[3,4,5,6]
// let c=[...a,...b]

let A=new Set(a)
let B=new Set(b)

let c= a.filter(num=> !B.has(num))
let C=new Set(c)
console.log(C);

// const map= new Map()
// console.log(map);

let countries=[
    ['Bolivia','Cochabamba'],
    ['Bolivia','Santa Cruz'],
    ['Bolivia','La Paz'],
    ['Argentina','Buenos Aires']
]
const map=new Map(countries)
console.log(map);

const countriesMap= new Map()
countriesMap.set('Bolivia','Santa Cruz')
countriesMap.set('Argentina','Buenos Aires')
countriesMap.set('Colombia','Bogotá')
countriesMap.set('Peru','Lima')
console.log(countriesMap);
console.log(countriesMap.size);
console.log(countriesMap.get('Bolivia'));
console.log(countriesMap.has('Perus'));

for (const [country,city] of countriesMap) {
        console.log(country , city);
}

















