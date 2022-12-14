const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "containers-us-west-100.railway.app",
  user: "root",
  password: "CPuXS3FWHvnmKeVabRed",
  database: "railway"
});

var elo = false;

con.connect(function(err) {
  if (err) console.log(err);
  
});

app.get('/', (req, res) => {
    res.elo('Hello World!')
  }

)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
