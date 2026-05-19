const Employee = require('./employee');

const emp1 = new Employee("Avraham", 45, 15000);
const emp2 = new Employee("Dani", 25, 10000);
const emp3 = new Employee("Shimon", 38, 12300);


const fs = require('fs');
fs.mkdirSync('./employees-data');


const path1 = `./employees-data/${emp1.name}.txt`;
fs.writeFileSync(path1, JSON.stringify(emp1, null, 2));
console.log("emp1 saved succesfully");

const path2 = `./employees-data/${emp2.name}.txt`;
fs.writeFile(path2, JSON.stringify(emp2, null, 2), (err) => {
    if (err) {
        console.log("Error!!!!!", err.message);
    }
    else {
        console.log("emp2 saved succesfully");
    }
})

const path3 = `./employees-data/${emp3.name}.txt`;
fs.promises.writeFile(path3, JSON.stringify(emp3, null, 2))
    .then(() => {
        console.log("emp3 saved succesfully");
    })
    .catch((err) => {
        console.error("Error!!!!!", err.message);
    });