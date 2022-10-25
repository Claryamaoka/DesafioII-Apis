const database = require("../dao/mysql");

class Employee {
    constructor(cpf, name, rg, genre, birthday, admission, resignation) {
        this.cpf = cpf;
        this.name = name;
        this.rg = rg;
        this.genre = genre;         
        this.birthday = birthday; 
        this.admission = admission; 
        this.resignation = resignation; 
    };
}

module.exports = Employee;