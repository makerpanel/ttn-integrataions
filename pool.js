const util = require('util');
const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: config.mysqlHost,
	port: config.mysqlPort,
	user: config.mysqlUser,
	password: config.mysqlPassword,
	database: config.mysqlDatabase
});

pool.getConnection(async (_error, connection) => {
	if (connection) {
		connection.release();
	}
});

// Make pool query async
pool.query = util.promisify(pool.query);

module.exports = pool;
