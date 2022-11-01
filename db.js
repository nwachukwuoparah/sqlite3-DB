const sqlite3 = require("./node_modules/sqlite3").verbose();
let db = new sqlite3.Database("./db/user.db");
module.exports = db;

