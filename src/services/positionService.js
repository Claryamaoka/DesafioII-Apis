const { response } = require('express');
const Position = require("../model/position");
const dao = require("../dao/positionDao");
const Validate = require("./validationService");

class PositionService {
    async find() {
        let response = dao.readAllData();
        if(response)
            return response;
        else
            return null;
   }

   async create(body){
       if(!body)
           return null;
       if(Validate.validatePosition(body)){
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

module.exports = new PositionService();