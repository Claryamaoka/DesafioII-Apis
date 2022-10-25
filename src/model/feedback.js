const database = require("../dao/mysql");

class Feedback {
    constructor(cpf, feedbackId, feedback) {
        this.cpf = cpf;
        this.feedbackId = feedbackId;
        this.feedback = feedback;
    };
}

module.exports = Feedback;