// kill local host// kill -INT $(lsof -t -i :8080)

const ex = require("express");
const app = ex();
const db = require("./db.js");
const server = app.listen(8080, function () {
  console.log("Ready");
});
// allow acess to get data from the front end
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// links html file
app.get("/new", function (req, res) {
  res.sendFile(__dirname + "/add.html");
});
app.post("/adder", function (req, res) {
  console.log(req.body);
  let sql = "INSERT INTO users(first,last,email,password) VALUES (?,?,?,?)";
  db.run(
    sql,
    [
      req.body["first"],
      req.body["last"],
      req.body["email"],
      req.body["password"],
    ],
    (err, row) => {
      if (err) {
        throw err;
      }
      res.json({ data: this.lastID });
    }
  );
});
// gets a specfic user
app.get("/users/:id", function (req, res) {
  const query = "SELECT * from users where id = ?";
  console.log(req.params.id);
  const params = [req.params.id];
  db.all(query, params, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  });
});
// gets all the users
app.get("/users", function (req, res) {
  const query = "SELECT * from users";
  db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  });
});
// firse rout
app.get("/", function (req, res) {
  res.json({ status: "ready" });
});
