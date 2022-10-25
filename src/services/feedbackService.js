const { response } = require('express');
const Feedback = require("../model/feedback");
const Validate = require("./validationService");

let db = [new Feedback("1","Banana","Frutas"),new Product("2","Leite","Laticínios")];

class FeedbackService {
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
            db.push(new Product(body.id,body.name,body.section));
            return db;
        }
        
    }
}

module.exports = new FeedbackService();