
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')
const bodyParser = require("body-parser")

app.set('view-engine', 'ejs')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get("/register", (req,res)=>{
    res.render("register.ejs")
})
app.get('/plany', (req, res) => {
    res.render('plany.ejs')
})
app.get('/dieta', (req, res) => {
    res.render('dieta.ejs')
})
app.get('/trening', (req, res) => {
    res.render('trening.ejs')
})

app.post("/login", urlencodedParser, (req, res)=>{
    var email = req.body.email
    var pass = req.body.pass
    con.connect(function(err) {
    con.query(`SELECT * FROM users WHERE pass ="${pass}" AND email="${email}"`, function (err, result, fields) {
    if (Object.keys(result).length > 0){
      res.render("main")
    }
    else{ 
      res.render("error-login", 
      {
          'email':email,
          'pass':pass
      })
    }
  })
  })
  })
  
  
  app.post("/resister", urlencodedParser, (req,res)=>{
      var name = req.body.name
      var surname = req.body.surname
      var email = req.body.email
      var date = req.body.date
      var pass = req.body.pass
      var pass1 = req.body.pass1
      if (pass == pass1){
      con.connect(function(err) {
          con.query(`INSERT INTO users(name, surname, email, birth_date, pass) VALUES ('${name}','${surname}','${email}','${date}','${pass}')`, function (err, result) {
            if (err) throw err
            res.render("success-signup")
          })
        })
      }
      else {
        res.render("error-signup", 
        {
          'name':name, 
          'surname':surname,
          'email':email,
          'date':date,
          'pass':pass,
          'pass1':pass1
      })
      }
  })







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
