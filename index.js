const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

/*var host = process.env.DB_HOST || "localhost"
var user = process.env.DB_USER || "root"
var password = process.env.DB_PASSWORD || ""
var db = process.env.DB_NAME || "elo"
var port1 = process.env.DB_PORT || 3306*/


/*var host = process.env.DB_HOST 
var user = process.env.DB_USER 
var password = process.env.DB_PASSWORD
var db = process.env.DB_NAME 
var port1 = process.env.DB_PORT*/

/*var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: db,
  port: port1
});*/


var con = mysql.createConnection({
    host: "containers-us-west-155.railway.app",
    user: "root",
    password: "6Ld3S1lwE0F6OhC0wOcw",
    database: "railway",
    port: 7792
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.get('/', (req, res) => {
    con.query("SELECT * FROM elo", function (err, result, fields) {
      if (err) throw err;
      res.send(result);
      //console.log(result.RowDataPacket[0]);
      console.log(result[0].id);
    });
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
