const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3600;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/story", (req, res)=>{
    res.render("story");
});
app.get("/lifestyle", (req, res)=>{
    res.render("debate");
});
app.get("/interview", (req, res)=>{
    res.render("interview");
});
app.get("/internship", (req, res)=>{
    res.render("internship");
});
app.get("/graduation", (req, res)=>{
    res.render("graduation");
});
app.get("/inspiration", (req, res)=>{
    res.render("inspiration");
});
app.get("/powerless", (req, res)=>{
    res.render("powerless");
});
app.get("/noticeboard", (req, res)=>{
    res.render("noticeboard");
});
app.get("/she-won", (req, res)=>{
    res.render("she-won");
});
app.get("/chief-fresher-debate", (req, res)=>{
    res.render("chief-fresher-debate");
});

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));