const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "127.0.0.1",
  database: "blog",
  user: "root",
  password: "SS",
});

module.exports = pool;
