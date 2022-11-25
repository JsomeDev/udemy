
const express = require("express");
const path = require("path");


const app = express();

//our file 

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);

//error 다루기 
app.use(function(req,res) {
  res.status(404).render('404')
});
//server side error
app.use(function(error, req, res, next) {
  res.status(500).render('500')
})

app.listen(3000);
