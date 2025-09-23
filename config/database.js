
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
     {
    host: process.env.DB_HOST,
    logging: false,
    dialect: "postgres"
});

module.exports = sequelize;
