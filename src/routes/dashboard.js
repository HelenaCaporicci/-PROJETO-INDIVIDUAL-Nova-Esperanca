var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/totalUsuarios", function(req, res){

    dashboardController.buscarTotalUsuarios(req, res);

});

router.get("/obraMaisSelecionada", function(req, res){

    dashboardController.buscarObraMaisSelecionada(req, res);

});

router.get("/obraUsuario/:idUsuario", function(req, res){

    dashboardController.buscarObraUsuario(req, res);

});

router.get("/conhecimento", function(req, res){

    dashboardController.buscarConhecimento(req, res);

});

router.get("/curtidasObras", function(req, res){

    dashboardController.buscarCurtidasObras(req, res);

});

module.exports = router;