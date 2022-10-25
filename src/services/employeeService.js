const { response } = require('express');
const Employee = require("../model/employee");
const Validate = require("./validationService");
const dao = require("../dao/employeeDao");

class EmployeeService {
    async find() {
        return dao.readAllData();
    }

    async create(body){
        if(!body)
            return null;
        if(Validate.validateEmployee(body)){
            return dao.insertData(body);
        }
        return null;   
    }

    async update(body, code){
        if(!body)
            return null;
        
        return dao.updateData(body,code);
    }

    async delete(code){
        return dao.deleteData(code);
    }
}

module.exports = new EmployeeService();