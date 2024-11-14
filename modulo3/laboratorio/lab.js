    let emojies=['😁','😎']
    let emojiesDetalle=[{image:'😁',deta:'feliz'},{image:'😎',deta:'contento'}]

    const contacts = [
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
    }
];
    
    // write your code here
    
    let name=prompt('Ingrese el nombre del nuevo contacto')
    let phone=prompt('Ingrese el telefono del nuevo contacto')
    let email=prompt('Ingrese el email del nuevo contacto')
    
    
    console.log('Nombre',name);
    console.log('Phone ',phone);
    console.log('Email ',email);
    
    let newContact={
        name:name,
        phone:phone,
        email:email
    }
    
    contacts.push(newContact)
    
    // console.log(contacts);
    
    let last = contacts.length - 1;
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);