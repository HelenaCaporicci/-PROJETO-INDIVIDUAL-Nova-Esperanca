var dashboardModel = require("../models/dashboardModel");

function buscarTotalUsuarios(req, res) {

    dashboardModel.buscarTotalUsuarios()
    .then(function(resultado){

        res.json(resultado);

    }).catch(function(erro){

        console.log(erro);
        res.status(500).json(erro);

    });

}

function buscarObraMaisSelecionada(req, res) {

    dashboardModel.buscarObraMaisSelecionada()
    .then(function(resultado){

        res.json(resultado);

    }).catch(function(erro){

        console.log(erro);
        res.status(500).json(erro);

    });

}

function buscarObraUsuario(req, res) {

    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarObraUsuario(idUsuario)
    .then(function(resultado){

        res.json(resultado);

    }).catch(function(erro){

        console.log(erro);
        res.status(500).json(erro);

    });

}

function buscarConhecimento(req, res) {

    dashboardModel.buscarConhecimento()
    .then(function(resultado){

        res.json(resultado);

    }).catch(function(erro){

        console.log(erro);
        res.status(500).json(erro);

    });

}

function buscarCurtidasObras(req, res) {

    dashboardModel.buscarCurtidasObras()
    .then(function(resultado){

        res.json(resultado);

    }).catch(function(erro){

        console.log(erro);
        res.status(500).json(erro);

    });

}

module.exports = {

    buscarTotalUsuarios,
    buscarObraMaisSelecionada,
    buscarObraUsuario,
    buscarConhecimento,
    buscarCurtidasObras

}