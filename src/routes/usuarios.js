var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.get("/conhece", function(req, res){
    usuarioController.buscarConhece(req, res);
});

module.exports = router;