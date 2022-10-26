const { response } = require('express');
const Employee = require("../model/employee");
const Validate = require("./validationService");
const dao = require("../dao/employeeDao");

class EmployeeService {
    async find() {
        return dao.readAllData()
        // let response = dao.readAllData();
        // if(response)
        //     return response;
        // else
        //     return null;
    }

    async create(body){
        if(!body)
            return null;
        if(Validate.validateEmployee(body)){
            let response = dao.insertData(body);
            if(response)
                return response;
        }
        return null;   
    }

    async update(body, code){
        if(!body)
            return null;
        
        let response = dao.updateData(body,code);
        if(response)
            return response;
        else
            return null;
    }

    async delete(code){
        return dao.deleteData(code);
    }
}

module.exports = new EmployeeService();