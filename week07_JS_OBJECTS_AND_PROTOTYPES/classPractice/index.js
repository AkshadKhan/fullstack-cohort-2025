const obj1 = {
    fname: "Piyush",
    lname: "Garg",
    getFullName: function (){
        return `${this.fname} ${this.lname}`
    }
};

const obj2 = {
    fname: "Anirudh",
    lname: "jwala",
};

obj2.__proto__ = obj1
// obj1.__proto__ = null
console.log(obj2.toString())
// DRY - Do not repeat yourself

console.log(obj1.getFullName())
console.log(obj2.getFullName()) // I need to maintain everything and that's a problem

// instead I will be creating a class [refer to class.js]