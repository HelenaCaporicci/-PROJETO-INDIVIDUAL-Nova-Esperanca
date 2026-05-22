var database = require("../database/config");

function salvarObra(fkUsuario, fkObra) {

    var instrucaoSql = `
        INSERT INTO obrasFavoritas
        (fkUsuario, fkObra)
        VALUES
        (${fkUsuario}, ${fkObra});
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarObra
}