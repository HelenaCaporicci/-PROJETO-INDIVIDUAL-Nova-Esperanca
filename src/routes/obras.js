var express = require("express");
var router = express.Router();

var obraController = require("../controllers/obraController");

router.post("/salvarObra", function (req, res) {
    obraController.salvarObra(req, res);
});

module.exports = router;