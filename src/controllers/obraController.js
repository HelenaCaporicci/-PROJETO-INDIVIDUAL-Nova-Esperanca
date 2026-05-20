var obraModel = require("../models/obraModel");

function salvarObra(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;
    var fkObra = req.body.fkObraServer;

    if(fkUsuario == undefined){
        res.status(400).send("Usuário undefined");
    }

    else if(fkObra == undefined){
        res.status(400).send("Obra undefined");
    }

    else{

        obraModel.salvarObra(fkUsuario, fkObra)

        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);

            res.status(500).json(erro.sqlMessage);
        });

    }

}

module.exports = {
    salvarObra

}