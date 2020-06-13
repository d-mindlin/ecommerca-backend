// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerca-backend', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001,
});

module.exports = sequelize;
