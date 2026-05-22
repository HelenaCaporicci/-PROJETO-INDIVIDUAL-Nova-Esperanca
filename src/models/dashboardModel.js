var database = require("../database/config");

function buscarTotalUsuarios() {

    var instrucaoSql = `
        SELECT COUNT(id) AS totalUsuarios FROM usuario;
    `;

    return database.executar(instrucaoSql);
}

function buscarObraMaisSelecionada() {

    var instrucaoSql = `
        SELECT 
        o.titulo,
        COUNT(obf.fkObra) AS total
        FROM obrasFavoritas  obf
        JOIN obra o ON o.id = obf.fkObra
        GROUP BY o.titulo
        ORDER BY total DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function buscarObraUsuario(idUsuario) {

    var instrucaoSql = `
        SELECT 
        o.titulo
        FROM obrasFavoritas obf
        JOIN obra o ON o.id = obf.fkObra
        WHERE obf.fkUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

function buscarConhecimento() {

    var instrucaoSql = `
        SELECT 
        conhece,
        COUNT(id) AS total
        FROM usuario
        GROUP BY conhece;
    `;

    return database.executar(instrucaoSql);
}

function buscarCurtidasObras() {

    var instrucaoSql = `
        SELECT 
        o.titulo,
        COUNT(obf.fkObra) AS totalCurtidas
        FROM obra o
        LEFT JOIN obrasFavoritas obf
        ON obf.fkObra = o.id
        GROUP BY o.id, o.titulo
        ORDER BY totalCurtidas DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {

    buscarTotalUsuarios,
    buscarObraMaisSelecionada,
    buscarObraUsuario,
    buscarConhecimento,
    buscarCurtidasObras
}