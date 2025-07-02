const mysql = require("mysql2")

const conection = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'admin',
database: 'natura_react'
});


module.exports = {conection}