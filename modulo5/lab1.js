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
//! showContact: la función debe tomar dos argumentos; el primero es la lista de contactos y
//  el segundo es el número de índice del contacto que se va a mostrar; dentro de la función, 
//  verifique si se pasan los argumentos correctos, es decir, si los contactos son una matriz 
//  (use la construcción instanceofArray para esto);
const showContact=(lista,indice)=>{
          if (lista instanceof Array && typeof indice==='number') {
           for (let i = 0; i < lista.length; i++) {
                if (i===(indice-1)) {
                    console.log(`Nombre ${lista[i].name}`)
                }
           }
          } else{
            return 'Los parámetros no están siendo válidos'
          } 
}

let indice=2
// showContact(contacts,indice)
//! showAllContacts: la función debe tomar un argumento, la lista de contactos; 
// dentro de la función, verifique si el argumento dado es una matriz;
let showAllContacts=(lista)=>{
        if (!(lista instanceof Array)) {
            console.log('Parámetros no válidos');
        } else{
            console.log('LISTA DE CONTACTOS');
            
            for (const contacto of lista) {
                    console.log(`Nombre ${contacto.name} ,Teléfono ${contacto.phone}, Email ${contacto.email} `);
            }
        }
}
// showAllContacts(contacts)

//! addNewContact: la función debe tomar cuatro argumentos, una lista de contactos y los datos del nuevo contacto,
//  es decir: nombre, teléfono y número; Antes de agregar un nuevo contacto, 
// verifique si el argumento pasado es una matriz y si los nuevos datos de contacto tienen algún valor.

const addNewContact=(lista, nombre, telefono, email)=>{
    if (lista instanceof Array && typeof nombre ==='string' && typeof telefono==='string' && typeof email==='string') {
        let nuevoContacto={
            name: nombre,
            phone: telefono,
            email: email
        }
        lista.push(nuevoContacto)
        let ultimoIn=lista.length-1
        console.log('Nuevo Contacto');
        console.log(`Nombre :${lista[ultimoIn].name} , Telefono :${lista[ultimoIn].phone}, Email: ${lista[ultimoIn].email}`);
    } else {
        console.log('los parametros no son válidos');
    }
}
addNewContact(contacts, 'Julio', '23423423','julio@gmail.com')