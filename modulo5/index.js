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

let temperaturas=[23,12,11,14,15,11,12,13,15]
calcularPrmedio(temperaturas)
let temperaturas1=[23,11,11,14,15,11,12,11,11]
calcularPrmedio(temperaturas1)
