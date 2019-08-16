const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const mysql = require("./app/mysql");
// const Routes = require("./server/rounter.js");

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "./dist")));
// app.use("/reviews", Routes);

app.get("/games/:id", (req, res) => {
  let id = req.params.id.slice(1);
  let sql = `SELECT words FROM keywords 
  WHERE id = ${id}`;
  mysql.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else res.send(result);
  });
});

app.get("/scoreCard", (req, res) => {
  let sql = `SELECT player, score FROM players`;
  mysql.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      // console.log(result)
      res.send(result);
    }
  });
});

app.post("/postScore", (req, res) => {
  let { player, score } = req.body;

  let sql = `INSERT INTO players (player, score) value(?,?)`;
  mysql.query(sql, [player, score], function(err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("success post new score into database");
      res.send(result);
    }
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
