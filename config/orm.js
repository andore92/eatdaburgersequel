var connection = require('./connection');

var orm = {
	selectAll: function(cb){
		connection.query('SELECT * FROM burgers', function (err, result) {
      		if (err) throw err;
      		cb(result);
     });
	},
	
	insertOne: function(burger_name, cb){
		connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burger_name], function(err, result) {
    		if (err) throw err;
    		cb(result);
    	});
	},
	
	updateOne: function(burgerID, cb){
		connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err, result) {
    		if (err) throw err;
    		cb(result);
    	});
	}
};

module.exports = orm;


