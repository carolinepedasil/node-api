// Model da tabela de artigos

// titulo, descrição, publicado
module.exports = (sequelizeDatabase) => {
    const Artigo = sequelizeDatabase.define("artigos", {
        titulo: {
            type: Sequelize.STRING,
        },
        descricao: {
            type: Sequelize.STRING,
        },
        publicado: {
            type: Sequelize.BOOLEAN,
        },
    });

    return Artigo;
}