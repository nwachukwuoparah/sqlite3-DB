const db = require('./db.js')
let sql ='INSERT INTO users(first,last,email,password) VALUES ("Nkume","Oparah","nwachukwuoparah@gmail.com","pass")';

db.run(sql,[],function(err){
  if (err) {
    return console.log(err.message);
  }
  console.log(`Row ready ${this.lastID}`);
});
db.close();
