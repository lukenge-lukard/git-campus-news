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
app.get("/campus-101", (req, res)=>{
    res.render("campus-101");
});
app.get("/they-are-back", (req, res)=>{
    res.render("they-are-back");
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
app.get("/chief-fresher-debate", (req, res)=>{
    res.render("chief-fresher-debate");
});
app.get("/she-won", (req, res)=>{
    res.render("she-won");
});
app.get("/money", (req, res)=>{
    res.render("money");
});
app.get("/student-midwives", (req, res)=>{
    res.render("student-midwives");
});
app.get("/mental-health-awareness", (req, res)=>{
    res.render("mental-health-awareness");
});
app.get("/LDC-guild-swearing-in", (req, res)=>{
    res.render("LDC-guild-swearing-in");
});
app.get("/saturday-1-may-2021", (req, res)=>{
    res.render("saturday-1-may-2021");
});

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));