const { response } = require('express');
const Feedback = require("../model/feedback");
const Validate = require("./validationService");
const dao = require("../dao/feedbackDao");

class FeedbackService {
    async find() {
        return dao.readAllData();
    }

    async create(body){
        if(!body)
            return null;
        if(Validate.validateFeedback(body)){
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

module.exports = new FeedbackService();