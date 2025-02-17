class Person {
    constructor(fname,lname) { // a parameterised constructor
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

// Syntactical Sugar
const p1 = new Person("Piyush","Garg")
const p2 = new Person("Akash","Kadlag")

// Under the hood 
// p1.__proto__ = Person.prototype 

console.log(p1.getFullName())
console.log(p2.getFullName())

const user = function(){

}