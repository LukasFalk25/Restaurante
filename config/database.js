var mysql2 = require("mysql2/promise");
const config = require("config");

dbConnection = {
    async executeSQLQuery(sql, params){
        const connection = await mysql2.createConnection({
            host: config.get("database.host"),
            database: config.get("database.database"),
            user: config.get("database.user"),
            passoword: config.get("database.password")
        });
        const [rows, fields] = await connection.execute(sql, params);
        connection.end();
        return {rows, fields};
    }
}

module.exports = dbConnection;