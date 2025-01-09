// let Vehicle =function({id,latitude,longitude}) {
//     this.setPosition = function (latitude, longitude) {
//         this.time=Date.now()
//         this.longitude=longitude
//         this.latitude=latitude
//     }
//     this.id=id
//     this.status= 'unavailable'
//     this.setPosition(latitude,longitude)
// }
// let vehicle1= new Vehicle({id:'AL1024', latitude: 59.79887, longitude:17.245435})
// let vehicle2= new Vehicle({longitude:17.245435, latitude:58.79887, id:'AL1025'})
// console.log(vehicle1);
// console.log(vehicle2);

class Vehicle {
    constructor({id,latitude,longitude}) {
        this.id=id
        this.position={latitude, longitude}
        this.status='unavailable'    
    }
    set position({latitude,longitude}){
        this.time= Date.now()
        this.longitude=longitude
        this.latitude=latitude
    }
    get position(){
        return {
            latitude:this.latitude,
            longituh:this.longitude
        }
    }
}

class Bus extends Vehicle {
    constructor({seats, id,latitude,longitude}) {
        super({id, latitude,longitude})
        this.seats= seats
    }
}
let bus= new Bus({seats:40,id:'AL1024', latitude: 59.79887, longitude:17.245435})
console.log(bus.seats);
console.log(bus.id);
let vehicle2= new Vehicle({id:'AL1024', latitude: 59.79887, longitude:17.245435})
console.log(vehicle2);



vehicle1.position={latitude: 59.79887, longitude:17.245435}
console.log(vehicle1.position);



let AlmostEmptyClass= class {
    constructor(sth) {
        console.log(sth);
    }
    sayHi(){
        console.log('Hi!');
    }
}
let almostEmptyClass= new AlmostEmptyClass(120)
// almostEmptyClass.sayHi()

// console.log(typeof almostEmptyClass);
// console.log(almostEmptyClass.constructor.name);
console.log(almostEmptyClass instanceof AlmostEmptyClass);
console.log(almostEmptyClass instanceof String);


class Person {
    constructor(firstName, lastName,age, country,city){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.country= country
        this.city=city
        this.score=0
        this.skills=[]
    }

    getFullName(){
        const getFullName= this.firstName + ' ' + this.lastName
        return getFullName
    }
    set setScore(score){
        this.score+=score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }
}

const person= new Person('Mario','Salazar',38, 'Bolivia','Cochabamba')
console.log(person.getFullName())
console.log(person.getScore);

person.setScore=1
person.setSkill='HTML'
person.setSkill='CSS'
person.setSkill='JAVASCRIPT'
console.log(person.getSkills);

























