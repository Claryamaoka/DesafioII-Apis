const { response } = require('express');
const Feedback = require("../model/feedback");
const service = require("../services/feedbackService");
const Output = require("../model/output");

class FeedbackController {
    async create(req, res) {
        await service.create(req.body)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Creation Error","O nome é obrigatório e não pode ser repetido"));
                
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async listAll(req, res) {
        //await service.find().sort("id")
        await service.find()
            .then(
                response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Error","Não foi possível listar os feedbacks."));
                let responseAPI = [];
                for (let i = 0; i < response.length; i++){
                    responseAPI.push(JSON.parse(response[i]));
                }
                return res.status(200).json(responseAPI);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async update(req, res) {
        const code = req.params.code;
        await service.update(req.body, code)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Not Found","O feedback não foi encontrado"));
                if(response == "Error")
                    return res.status(400).json(new Output("400","Update Error","O id não pode ser repetido"));
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async delete(req, res) {
        const code = req.params.code;
        await service.delete(code)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Not Found","O feedback não foi encontrado"));
                if(response == "Error")
                    return res.status(400).json(new Output("400","Update Error","O id não pode ser repetido"));
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

}

module.exports = new FeedbackController();