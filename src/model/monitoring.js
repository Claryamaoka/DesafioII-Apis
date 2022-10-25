const database = require("../dao/mysql");

class Monitoring {
    constructor(id, product, establishment,section,date) {
        this.id = id;
        this.product = product;
        this.establishment = establishment;
        this.section = section;
        this.date = date;
    };
}

module.exports = Monitoring;