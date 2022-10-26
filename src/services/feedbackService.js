const { response } = require('express');
const Feedback = require("../model/feedback");
const Validate = require("./validationService");
const dao = require("../dao/feedbackDao");

class FeedbackService {
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
       if(Validate.validateFeedback(body)){
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

module.exports = new FeedbackService();