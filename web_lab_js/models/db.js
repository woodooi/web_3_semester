const Sequelize = require("sequelize");
const dbConfig = require("../config/db_config");

// Create a connection to the database
module.exports = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
	max: dbConfig.pool.max,
	min: dbConfig.pool.min,
	acquire: dbConfig.acquire,
	idle: dbConfig.idle
  }
});
