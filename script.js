// complete this js code
function Person(name, age) {
	this._name = name;
	this._age = age ;
	greet(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old`);
	}
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the constructor of the parent class (Person)
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
