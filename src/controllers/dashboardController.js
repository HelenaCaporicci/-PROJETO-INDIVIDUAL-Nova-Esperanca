var dashboardModel =
require("../models/dashboardModel");

function buscarDados(req, res){

    dashboardModel.buscarDados()

    .then(function(resultado){

        res.json(resultado[0]);

    })

    .catch(function(erro){

        console.log(erro);

        res.status(500).json(erro);

    });

}

module.exports = {
    buscarDados
}