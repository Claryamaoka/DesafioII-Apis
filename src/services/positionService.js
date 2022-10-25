const { response } = require('express');
const Position = require("../model/position");
const dao = require("../dao/positionDao");
const Validate = require("./validationService");

class PositionService {
    async find() {
        return dao.readAllData();
    }

    async create(body){
        if(!body)
            return null;
        if(Validate.validatePosition(body)){
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

module.exports = new PositionService();