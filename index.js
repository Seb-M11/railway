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


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
