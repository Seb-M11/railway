const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');


/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "elo"
});*/


var con = mysql.createConnection({
    host: "containers-us-west-100.railway.app",
    user: "root",
    password: "CPuXS3FWHvnmKeVabRed",
    database: "railway"
  });



app.get('/', (req, res) => {
   con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM elo", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
