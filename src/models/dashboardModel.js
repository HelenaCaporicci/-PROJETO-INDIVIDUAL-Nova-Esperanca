var database = require("../database/config");

function buscarDados(){

    var instrucaoSql = `

SELECT 
(SELECT COUNT(*) FROM usuario) AS totalUsuarios,

(SELECT COUNT(*) FROM obraFavorita) AS totalCurtidas,

(
SELECT titulo
FROM obra
JOIN obraFavorita
ON obra.id = obraFavorita.fkObra
GROUP BY titulo
ORDER BY COUNT(*) DESC
LIMIT 1
) AS obraMaisCurtida,

(
SELECT ROUND(
(COUNT(CASE WHEN conhece = 'Sim' THEN 1 END) * 100)
/ COUNT(*)
)
FROM usuario
) AS porcentagemConhece,

(SELECT COUNT(*) FROM usuario WHERE conhece = 'Sim')
AS conhece,

(SELECT COUNT(*) FROM usuario WHERE conhece = 'Mais ou menos')
AS conhecePouco,

(SELECT COUNT(*) FROM usuario WHERE conhece = 'Não')
AS naoConhece;

`;

    return database.executar(instrucaoSql);

}

function buscarObras(){

    var instrucaoSql = `

SELECT
obra.titulo,
COUNT(obraFavorita.fkObra) AS curtidas

FROM obraFavorita

JOIN obra
ON obra.id = obraFavorita.fkObra

GROUP BY obra.titulo;

`;

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarDados,
    buscarObras
}