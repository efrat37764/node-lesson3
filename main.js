const Employee = require('./employee');

const emp1 = new Employee("Avraham", 45, 15000);
const emp2 = new Employee("Dani", 25, 10000);
const emp3 = new Employee("Shimon", 38, 12300);


const fs = require('fs');
fs.mkdirSync('./employees-data', { recursive: true });


const addEvaluation = (employeeName, evaluation, cb) => {
    const filePath = `./employees-data/${employeeName}.txt`;

    fs.appendFile(filePath, `\nevaluation: ${evaluation}`, (err) => {
        if (err) {
            console.log('error!!!!!:', err.message);
        } else {
            console.log(`Evaluation for ${employeeName} added successfully`);
            cb();
        }
    });
};


const checkEmployeesFolder = () => {
    const folderPath = './employees-data';

    const files = fs.readdirSync(folderPath);

    console.log('\n===========================');
    console.log('names of the found files: ');
    console.log(files);

    console.log(`count of the found files: ${files.length}`);

    if (files.length === 3) {
        console.log('there are 3 files in the directory!');
    }
    else {
        console.log(`found ${files.length} files, unstead of 3.`);
    }
    console.log('===========================');
};


const path1 = `./employees-data/${emp1.name}.txt`;
fs.writeFileSync(path1, emp1.toString());
console.log("emp1 saved succesfully");


const path2 = `./employees-data/${emp2.name}.txt`;
fs.writeFile(path2, emp2.toString(), (err) => {
    if (err) {
        console.log("Error!!!!!", err.message);
    }
    else {
        console.log("emp2 saved succesfully");
        addEvaluation(emp2.name, 95, () => {
            console.log("Finished all operations for emp2!");
            checkEmployeesFolder();
        });
    }
})


const path3 = `./employees-data/${emp3.name}.txt`;
fs.promises.writeFile(path3, emp3.toString())
    .then(() => {
        console.log("emp3 saved succesfully");
    })
    .catch((err) => {
        console.error("Error!!!!!", err.message);
    });