const path = require("path");
const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.set("view engine", "ejs"); //Ejs package
app.set("views", path.join(__dirname, "views")); //where to find my views

app.use(express.static('public'));

app.use(authRoutes);

app.listen(3000);
