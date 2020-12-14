var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.host,
        port: process.env.dbport,
        user: process.env.dbuser,
        password: process.env.password,
        database: process.env.database
    });
};
console.log(process.env.dbuser)
connection.connect();
module.exports = connection;