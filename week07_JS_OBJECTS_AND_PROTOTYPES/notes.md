# JS Objects & Protypes


## Objects

* Real world entity having some properties and functionalities
* Functionalities are methods.
* Properties are the attributes.

## Classes

* are used to define schema for objects
* e.g.  class Person(){
          ...schema,
          new key
        }
        const p1 = new Person()
        const p2 = new Person()
* new keyword allocates a new memory in heap.


## Constructors

* to construct and initialize objects of a class we need constructor.
* By default a default constructor is created by the js if no constructor is created explicitly (Default Constructor).
* e.g. class Person{   
          // statements
       }     
       const p = new Person()
* Constructors that are used to initialise an object's prop are called parameterised constructor.
* e.g. class Person{
          constructor(firstName){
            this.xyz = firstName
          }
       }     
       const p = new Person("Piyush")


# Protype Chaining

* Inheritance until null does not appears
* .prototype is an actual object whereas __proto__ is the link to actual prototype of an object 
* Object.__proto__ => Object
* Object.__proto__.__proto__ => null
* Array.__proto__.__proto__ => Object
* String.__proto__.__proto__ => Object

Blueprint -> prototype
Object -> __proto__


# extends

* keyword to inherit property of one class into other.



# DOM

* Document Object Model

## Window 
* allows interaction with browser's window

# References 

* (MDN Web Docs - JavaScript Objects)[https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects]
* (MDN Web Docs - Prototypes)[https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes]