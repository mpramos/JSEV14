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
}];

let opcion=+(prompt(` Opcion 1: Digite el numero 1 para mostrar su primer contacto
      Opcion 2: Digite el numero 2 para mostrar su ultimo contacto
      Opcion 3: Digite el numero 3 para agregar un contacto `))

console.log(opcion);
console.log(typeof opcion);

if (opcion===1) {
    //Mostrar el primer contacto
    alert(`Nombre :${contacts[0].name}, Telefono ${contacts[0].phone}, Email ${contacts[0].email}`)
    
} else if (opcion===2) {
    let ultimaPosicion= contacts.length-1
    //Mostar el ultimo contacto
    alert(`Nombre :${contacts[ultimaPosicion].name}, Telefono ${contacts[ultimaPosicion].phone}, Email ${contacts[ultimaPosicion].email}`)
} else if(opcion===3){
    //Agregar un nuevo contacto

   let nombre= prompt('Ingrese el nombre del nuevo contacto')
   let telefono= prompt('Ingrese el telefono del nuevo contacto')
   let email= prompt('Ingrese el email del nuevo contacto')

    let nuevoContacto={
        name:nombre,
        phone:telefono,
        email:email
    }

    contacts.push(nuevoContacto)

    alert(`Nuevo contacto agregado correctamente
     Nombre: ${contacts[contacts.length-1].name}
     Telefono: ${contacts[contacts.length-1].phone}
     Email: ${contacts[contacts.length-1].email}
     `)

}
