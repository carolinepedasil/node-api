// Configuração do banco de dados

// dotenv
// npm install --save dotenv

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    connectionStringUrl: process.env.DB_CONNECTING_STRING_URL,
    dialect: "postgres"
};