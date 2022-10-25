const { response } = require('express');
const Position = require("../model/position");

let db = [new Section("1","Açougue"),new Section("2","Frutas"),new Section("3","Laticínios")];

class PositionService {
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
        db.push(new Section(body.id,body.name));
        return db;
    }
}

module.exports = new PositionService();