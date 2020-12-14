var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.username,
        password: process.env.password,
        database: process.env.database
    });
};
connection.connect();
module.exports = connection;