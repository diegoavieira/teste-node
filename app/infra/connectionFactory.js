var mysql = require('mysql');

function createDBConnection() {
 	return mysql.createConnection({
		host : 'localhost',
    	user : 'root',
    	password : '12345',
    	database : 'teste_node'
  	});
}

module.exports = function() {
	return createDBConnection;
}