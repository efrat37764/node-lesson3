class Employee {
    name;
    age;
    salary;

    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}

module.exports = Employee;