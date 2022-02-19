// const express = require('express');
// var usersRouter = require('./routes/users');
// ;
// const app = express();
// app.use('/users', usersRouter);

const express = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "web",
  password : ''
});

connection.connect(function(err){
  if(err) throw err;

  console.log("Connected...");
});


app.get('/', function(req, res) {
  res.render('users', { title: 'Express' });
});
app.post('/register', function (req, res) {
    console.log(req.body);
    var sql = "insert into users values(null, '"+ req.body.fullName +"', '"+ req.body.gender +"', '"+ req.body.address +"', '"+ req.body.emailAddress +"',"+ req.body.phone +")";
    connection.query(sql, function(err) {
      if (err) throw err;
      res.render('users',  { title: 'Data Saved', message : 'Data saved Succesfully'});
    })

    //connection.end();
});
app.get('/users', function(req, res) {
  var sql = "select * from users";
    connection.query(sql, function(err,rows,fields) {
      if (err) throw err;
      res.render('users_detail',  { title: 'Data Saved', items : rows});
    })
});
app.listen(3000, function() {
    console.log('Server is running on port 3000...');
});