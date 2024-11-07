let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

    let newContact={
        name:'Maisie Haley',
        phone:'0913 531 3030',
        email: 'risus.Quisque@urna.ca.'
    }
    contacts.push(newContact)
    // Mostrar primer contacto
    console.log('PRIMER CONTACTO');
    
    let primerContacto=`Nombre: ${contacts[0].name}/ Telefono: ${contacts[0].phone}/ Email:${contacts[0].email}`
    console.log(primerContacto);
    //Mostrar el ultimo contacto
    console.log('ULTIMO CONTACTO');
    let ultimaPosicion=contacts.length-1
    let ultimoContacto=`Nombre: ${contacts[ultimaPosicion].name}/ Telefono: ${contacts[ultimaPosicion].phone}/ Email:${contacts[ultimaPosicion].email}`
    console.log(ultimoContacto);

