const db = require('./db.js')
db.run('CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT,first,last,email,password)')
db.close()