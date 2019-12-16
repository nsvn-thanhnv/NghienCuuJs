class Student {
    fullName: string;
    constructor(public fisrtName: string, public middleInitial: string, public lastName: string) {
        this.fullName = fisrtName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    fisrtName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.fisrtName + " " + person.lastName;
}

let user = new Student("Thanh", "Van", "Nguyen");

document.body.textContent = greeter(user);
