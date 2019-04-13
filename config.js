module.exports = {
	nodeEnv: process.env.NODE_ENV || 'development',
	mysqlHost: process.env.MYSQL_HOST || 'localhost',
	mysqlPort: process.env.MYSQL_PORT || 3306,
	mysqlUser: process.env.MYSQL_USER || 'root',
	mysqlPassword: process.env.MYSQL_PASSWORD || 'root',
	mysqlDatabase: process.env.MYSQL_DATABASE || 'makerpanel'
};
