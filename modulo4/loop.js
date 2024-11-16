for (let i = 1; i <=5; i++) {
    console.log('se repite');
}

let i=0
let bandera=false
while (!bandera) {
    if (i===5) {
        bandera=true
    } 
    console.log('se repite por while');
    i++ // 1
}




let values = [10, 30, 50, 100];
let sum = 0;

// for (let i = 0; i < values.length; i++) {
//     sum=sum+values[i] //10
// }
// console.log(sum);

for (let numero of values) {
    sum=sum+numero //10
}
console.log(sum); // -> 190

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
for (let key in user) {
    console.log(`${key}=>${user[key]}`); // -> name, surname, age, email
};

let i = 0;
// An infinite loop
while ('-1'){
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}
 
console.log('fin ',i);


if (true) {
    console.log('valor verdadero');
} else {
    console.log('valor falso');
}