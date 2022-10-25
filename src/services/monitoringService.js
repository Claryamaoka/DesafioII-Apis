const { response } = require('express');
const Monitoring = require("../model/monitoring");

let db = [new Monitoring("1","1","1","2","2022-09-18 10:00:03"),new Monitoring("2","2","1","3","2022-09-18 12:00:03")];

class MonitoringService {
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
        db.push(new Monitoring(body.id,body.product,body.establishment,body.section,body.date));
        return db;
    }
}

module.exports = new MonitoringService();