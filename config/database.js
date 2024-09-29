var mysql = require("mysql");
const config = require("config");

var connection = mysql.createConnection({
    host: config.get("database.host"),
    database: config.get("database.database"),
    user: config.get("database.user"),
    passoword: config.get("database.password")
});

connection.connect();

connection.query('SELECT * FROM PRODUTOS', function(err, rows, fields){
    if (err) throw err;
    console.log('Resultados:', rows);
});

connection.end();