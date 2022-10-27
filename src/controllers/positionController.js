const { response } = require('express');
const Position = require("../model/position");
const service = require("../services/positionService");
const Output = require("../model/output");

class PositionController {
    async list(req, res) {
        await service.find()
            .then(
                response => {
                    // response = response.sort(function(a, b) { 
                    //     (a.cpf - b.cpf);
                    //   });
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

    async create(req, res) {
        await service.create(req.body)
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req, res) {
        const code = req.params.code;
        await service.update(req.body, code)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Not Found","A posição não foi encontrada"));
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
        await service.delete( code)
            .then(response => {
                if(response == null)
                    return res.status(400).json(new Output("400","Not Found","A posição não foi encontrada"));
                if(response == "Error")
                    return res.status(400).json(new Output("400","Update Error","O id não pode ser repetido"));
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
}

module.exports = new PositionController();