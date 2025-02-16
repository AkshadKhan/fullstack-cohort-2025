// const PersonS = {
//     firstname : this.firstname;
    
// }


class Person {
    constructor(fname,lname) { // a parameterised constructor
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person("Piyush","Garg")
const p2 = new Person("Akash","Kadlag")

console.log(p1.getFullName())
console.log(p2.getFullName())