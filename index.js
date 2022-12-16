const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

/*var host = process.env.DB_HOST || "localhost"
var user = process.env.DB_USER || "root"
var password = process.env.DB_PASSWORD || ""
var db = process.env.DB_NAME || "elo"
var port1 = process.env.DB_PORT || 3306

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: db,
  port: port1
});

/*var con = mysql.createConnection({
    host: "containers-us-west-155.railway.app",
    user: "root",
    password: "6Ld3S1lwE0F6OhC0wOcw",
    database: "railway",
    post: 7792
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });*/


app.get('/', (req, res) => {
    res.send("elo")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
