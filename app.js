const express = require("express");
const path = require("path");
const app = express();
// const hbs = require("hbs");
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3600;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

// hbs.registerPartials(__dirname + '/views/partials', function (err) {});
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

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));