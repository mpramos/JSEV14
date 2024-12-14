// // const x=10
// // x=20

// // const contact={}
// // contact= {email:'evolutech@gmail.com'}
// // console.log(contact);

// const contact = {}
// contact.email='evolutech@gmail.com'
// console.log(contact.email);
// delete contact.email
// console.log(contact.email);

// // let point1 =  {x:10,y:20} //1eff3 {10,20}
// // let point2 = {x:10,y:20} //2ffgfd {10,20}

// // console.log(point1===point2);

// let point0 =  {x:10,y:20} 
// let point1=point0
// let point2={}
// console.log(point1);
// Object.assign(point2,point0)
// console.log(point2.x);
// console.log(point2.y);
// console.log(point1===point0);
// console.log(point1===point2);
// let point3={}
// Object.assign(point3, point0,{z:100})
// let point4={}
// Object.assign(point4, point3,{z:200, color:'red'})
// console.log(point4.z);
// console.log(point4);

let point={x:10, y:20}
// let point2= Object.assign({},point)
// let point3=Object.assign({},point,{z:100})
// console.log(point2);
// console.log(point3);

let point0= {x:10,y:20}
let point2= {...point0}
console.log(point0===point2);

// let circle = {
//     radius:100,
//     center :{
//         x:0,
//         y:0
//     },
//     getType: function () {
//         return 'circle'
//     }
let circle = {
    radius:100,
    center :{
        x:0,
        y:0,
        show(){console.log(`${this.x} ${this.y}`)}
    },
}
circle.center.show()

let test={
    point: circle.center
}
console.log(test.point.show());
//  setters y los getters
let contact={
    _age:36,
    firstName:'David',
    lastName:'Taylor',
    _telf:'27236636464',
    get fullName(){return `${this.firstName} ${this.lastName}`},
    get age(){return this._age},
    set age(a){if(a>0) this._age=a}
}
console.log(contact.fullName)
contact.age=20
console.log(contact.age);

let keys=Object.keys(contact)
console.log(keys);
let desc= Object.getOwnPropertyDescriptor(contact,"firstName")
console.log(desc);

Object.preventExtensions(obj)
Object.isExtensible() 
Object.seal(obj)
Object.isSealed(obj)
Object.freeze(obj)
Object.isFrozen(obj)
let contacto={}
Object.defineProperty(contacto,"_age",{
    value:36,
    writable:true,
    enumerable:true,
    configurable:true
})
let keyss=Object.keys(contacto)
console.log(keyss);

console.log(contacto._age);

let enumKeys=Object.keys(contacto)
let allKeys=Object.getOwnPropertyNames(contacto)
console.log(enumKeys);
console.log(allKeys);

let createPoint= (x,y)=>({x,y})
let point1 = createPoint(1,1)
let point3 = createPoint(3,4)
console.log(point1);
console.log(point3);
 let createColoredPoint = function (x,y, color) {
    let _info='... object under construction'
    let _color= color
    console.log(_info);
    this.x=x
    this.y=y
    this.getColor = function () {return _color}

}
 let coloredPoint1= new createColoredPoint(1,1,'red')
 let coloredPoint2= new createColoredPoint(2,2,'green')
console.log(coloredPoint1.getColor());
console.log(coloredPoint2.getColor());
console.log(coloredPoint1._color);

console.log(createColoredPoint.constructor.name);
console.log(typeof createColoredPoint.constructor);

let a={}
console.log(typeof a.constructor);

  let emptyObject= new Object()
    console.log(emptyObject.constructor.name);

    let reallyEmptyObject= Object.create(null)
console.log(typeof reallyEmptyObject.constructor);
    
let punto={x:0,y:0}
let coloreandoPunto={color:'red'}

coloreandoPunto.__proto__= punto
console.log(punto);
punto.y=200
console.log(coloreandoPunto.y);
console.log(punto.y);

let figura={
    getType:function () {
        return this.type ? this.type : 'unknown'
    }
}
let circulo ={
    type:'circle',
    center:{x:0, y:0},
    radius:100
}
circulo.__proto__= figura

// console.log(figura.getType());
// console.log(circulo.getType());

Object.setPrototypeOf(circulo, figura)
let proto=Object.getPrototypeOf(circulo)
console.log(circulo.getType());


let circle1= Object.create(figura)
circle1.type='Circle'
circle1.center={x:0,y:0}
circle1.radius=100
console.log(circle1.getType());

let Figure = function () {
    this.getType=function () {
        return this.type ? this.type:'unknown'
    }
}
let figure=new Figure;
console.log(figure);

let Circle=function (center, radius) {
    this.type='circle'
    this.center=center,
    this.radius=radius
}
let Triangle=function name() {
    
}
Circle.prototype=figure
let circle1= new Circle({x:0,y:0},10)
let circle2= new Circle({x:100,y:100},100)

console.log('circle 1 ', circle1);
console.log('circle 2 ', circle2);
Circle.prototype.hi= function () {console.log('hi!');
}
circle1.hi()
figure.hi()


    let testString= new String('uno dos tres')
    console.log(testString.length);

    String.prototype.hi = function () {console.log('hi 🐱‍👤')}
    console.log(testString.hi);
    console.log('abcd'.hi());
    
    














