let nombres=['juana','lucia','cesar','ana','julio']
console.log(nombres.sort());

console.log(['z','c','a'].sort());

console.log([11,2,22,1].sort());


console.log([11,2,22,1].sort((a, b) => a - b));
console.log([11,2,22,1].sort((a, b) => b - a));
console.log(
    [11,2,22,1].sort(function (a, b) {
        let retVal = 0;
        if (a > b) {
            retVal = 1;
        } else {
            retVal = -1;
        }
        return retVal;
    })
);
// Otorgue al usuario la opción de seleccionar una acción de ordenación de la lista.
//  Cuando se selecciona esta opción, el usuario debe poder
//  especificar si desea ordenar los contactos por nombre, teléfono o correo electrónico.

//* console.log([11,2,22,1].sort((a, b) => a - b));
const ordenarNombre=(lista)=>{
    console.log( lista.sort((a,b)=> {
        if (a.name < b.name) return -1 
        if (a.name >b.name) return 1
        return 0
    }));
}
const ordenarEmail=(lista)=>{
    console.log( lista.sort((a,b)=> {
        if (a.email < b.email) return -1 
        if (a.email >b.email) return 1
        return 0
    }));
}
const ordenarTelefono=(lista)=>{
    console.log( lista.sort((a,b)=> {
        if (a.phone < b.phone) return -1 
        if (a.phone >b.phone) return 1
        return 0
    }));
}
// ordenarNombre(contacts)
// ordenarTelefono(contacts)
ordenarEmail(contacts)
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
},
{
    name: "Ana Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}
];
const ordenarPorPropiedad= (lista, propiedad)=>{
    return lista.sort((a,b)=>{
        if (a[propiedad] < b[propiedad]) return -1 
        if (a[propiedad] >b[propiedad]) return 1
        return 0
    })
}
// console.log(ordenarPorPropiedad(contacts, "name"));
console.log(ordenarPorPropiedad(contacts, "email"));
// console.log(ordenarPorPropiedad(contacts, "phone"));


