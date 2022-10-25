const database = require("../dao/mysql");

class Position {
    constructor(cpf, positionId, positionName, startDate, endDate) {
        this.cpf = cpf;
        this.positionId = positionId;        
        this.positionName = positionName;
        this.startDate = startDate;
        this.endDate = endDate;
    };
}

module.exports = Position;