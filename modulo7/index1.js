//! ¿Qué es un objeto?

//? Array como tipo complejo
//* colecciones de datos
let a= ['🐱‍👤','🐀','😅']//=>//indice, length
console.log(a[0]);
a[0]=a[0]+'🐀'
console.log(a[0]);
let codigoEjemplo={
    id:10,
    delay:20,
    nombre:'Juana',
    isPresent:true,
    delay:50
}
codigoEjemplo.delay= codigoEjemplo.delay*2
console.log(codigoEjemplo.id);
console.log(codigoEjemplo.nombre);
console.log(codigoEjemplo.delay);

//* notacion literal =>{}
//* notación de punto - operador de acceso
codigoEjemplo.telefono='12342423432'
console.log(codigoEjemplo);
console.log(codigoEjemplo.telefono);

let contact={
    telefono:'20234234',
    email:'evolutech@gmail.com',
    "primer Nombre":'Juana'
}
console.log(contact);

contact["primer Nombre"]='Juan'
console.log(contact["primer Nombre"])
contact.nombre='Maria'
contact.apellido='Ramirez'
contact.email=['evolutech@gmail.com','maria@gmail.com']
contact.email={
    private:'maria@gmail.com',
    work:'evolutech@gmail.com'
}
console.log(contact.telefono);
console.log(contact.nombre);
console.log(contact.apellido);
console.log(contact.email);

delete contact.email.work
console.log(contact.email.work);
console.log(contact.email.private);

let test ={
    nr:10,
    b:false,
    str:'uno dos tres',
    arr:[10,20,30],
    obj:{
        x:10,
        y:20
    },
    fn:function (arg) {console.log(arg)}
}
test.fn(123)
console.log(test.obj.x);
test.obj.y=40
console.log(test.obj.y);


let point={
    x:0,
    y:0,
    moveHorizontally: function (distancia) {
        this.x=this.x + distancia
    },
    moveVertically: function (distancia) {
        this.y=this.y + distancia
    },
}
console.log(point.x);
point.moveHorizontally(30)
console.log(point.x);

let contact1 ={
    email_1: 'contact1@gmail.com',
    email_2: 'contact2@gmail.com'
}
console.log(contact1);

for (const key in contact1) {
    console.log(`${key} => ${contact1[key]}`);
    }
for (let i = 1; i <=2 ; i++) {
    let key ='email_' +i
    console.log(key);
    console.log(contact1[key]);
}    
if (!contact1.notes) {
    contact1.notes='esta es una nota importante'
}

console.log(contact1);

if (contact1 && contact1.email_1) {
    console.log(contact1.email_1);
    
}
contact1 && contact1.email_1 && console.log(contact1.email_1);

// in => true || false
if ("notes" in contact1) {
    console.log(contact1.notes);
}

let keys=Object.keys(contact1)
console.log(keys);





















