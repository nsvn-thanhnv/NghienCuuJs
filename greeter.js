var Student = /** @class */ (function () {
    function Student(fisrtName, middleInitial, lastName) {
        this.fisrtName = fisrtName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = fisrtName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.fisrtName + " " + person.lastName;
}
var user = new Student("Thanh", "Van", "Nguyen");
document.body.textContent = greeter(user);
