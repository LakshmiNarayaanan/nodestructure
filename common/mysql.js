/*Sequelize mysql*/
var config = require('../config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
	config.mysql.database,
	config.mysql.username,
	config.mysql.password, {
		host: config.mysql.host,
		port: config.mysql.port,
		dialect: 'mysql'
	}
);

module.exports = sequelize;