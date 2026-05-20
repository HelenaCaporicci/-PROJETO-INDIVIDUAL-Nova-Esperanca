
CREATE DATABASE nova_esperanca;

USE nova_esperanca;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	conhece varchar(35)
);

CREATE TABLE obra (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(55)
);

CREATE TABLE obrasFavoritas (
    fkUsuario INT,
    fkObra INT,
    dataSelecao DATETIME,
    PRIMARY KEY (fkUsuario, fkObra),
    CONSTRAINT fkFavoritaUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
	CONSTRAINT fkFavoritaObra FOREIGN KEY (fkObra) REFERENCES obra(id)
);

INSERT INTO obra VALUES
    (DEFAULT, 'Meu último carnaval'),
    (DEFAULT, 'O primeiro'),
    (DEFAULT, 'Capelinha'),
    (DEFAULT, 'A casa de táboa'),
    (DEFAULT, 'Sou chorona'),
    (DEFAULT, 'Saida da escola'),
    (DEFAULT, 'Onde estão?'),
    (DEFAULT, 'Reviravolta');

    


