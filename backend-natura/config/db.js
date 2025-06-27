const mysql = require("mysql2")

const conection = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: '',
password: '213026',
database: 'natura_react'
});


module.exports = {conection}