const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const PORT = process.env.PORT || 3600;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Define Routes
app.use("/", require("./routes/pages"));

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));