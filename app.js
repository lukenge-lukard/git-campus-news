const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mysql = require("mysql");
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3600;

dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set("view engine", "hbs");

db.connect((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("MYSQL Connected...");
    }
});


// Handlebars setting
app.set("view engine","hbs");
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));

//Define Routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));