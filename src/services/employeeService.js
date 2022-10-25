const { response } = require('express');
const Employee = require("../model/employee");
const Validate = require("./validationService");

class EmployeeService {
    async find() {
        return db;
    }

    async findById(id) {
        var res = db.find(x => x.id == id)
        if(!res)
            return null;
        return res;
    }

    async create(body){
        if(!body)
            return null;
        if(Validate.validateCreate(body,db)){
            db.push(new Establishment(body.id,body.name,body.address,body.image));        
            return db;
        }
        return null;   
    }

    async update(body, code){
        var res = db.find(x => x.id == code)
        if(!res)
            return null;
        
        if(!Validate.validateUpdate(code,body,db)){
            return "Error";
        }
        var foundIndex = db.findIndex(x => x.id == code);
        db[foundIndex] = new Establishment(body.id,body.name,body.address,body.image);
        return db;
    }

    async delete(code){

    }
}

module.exports = new EmployeeService();