const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password",
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connect at ${connection.threadID}`);
});

module.exports = connection;
