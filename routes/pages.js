const express = require("express");

const router = express.Router();

// maintabs
router.get("/", (req, res)=>{
    res.render("maintabs/index");
});
router.get("/campus-101", (req, res)=>{
    res.render("maintabs/campus-101");
});
router.get("/interview", (req, res)=>{
    res.render("maintabs/interview");
});
router.get("/internship", (req, res)=>{
    res.render("maintabs/internship");
});
router.get("/noticeboard", (req, res)=>{
    res.render("maintabs/noticeboard");
});
router.get("/inspiration", (req, res)=>{
    res.render("maintabs/inspiration");
});
router.get("/uncensored", (req, res)=>{
    res.render("maintabs/uncensored");
});

// admin routes
router.get("/admin", (req, res)=>{
    res.render("admin/login");
});
router.get("/admin/index", (req, res)=>{
    res.render("admin/index");
});

// new story file routes
router.get("/they-are-back", (req, res)=>{
    res.render("they-are-back");
});
router.get("/lifestyle", (req, res)=>{
    res.render("debate");
});
router.get("/ldc-guild-president-interview", (req, res)=>{
    res.render("ldc-guild-president-interview");
});
router.get("/midwifery-internship", (req, res)=>{
    res.render("midwifery-internship");
});
router.get("/graduation", (req, res)=>{
    res.render("graduation");
});


router.get("/powerless", (req, res)=>{
    res.render("powerless");
});

router.get("/chief-fresher-debate", (req, res)=>{
    res.render("chief-fresher-debate");
});
router.get("/she-won", (req, res)=>{
    res.render("she-won");
});
router.get("/money", (req, res)=>{
    res.render("money");
});
router.get("/student-midwives", (req, res)=>{
    res.render("student-midwives");
});
router.get("/mental-health-awareness", (req, res)=>{
    res.render("mental-health-awareness");
});
router.get("/LDC-guild-swearing-in", (req, res)=>{
    res.render("LDC-guild-swearing-in");
});
router.get("/saturday-1-may-2021", (req, res)=>{
    res.render("saturday-1-may-2021");
});
router.get("/saturday-8-may-2021", (req, res)=>{
    res.render("saturday-8-may-2021");
});
router.get("/check-on-your-friends", (req, res)=>{
    res.render("check-on-your-friends");
});
router.get("/tied-and-ready", (req, res)=>{
    res.render("tied-and-ready");
});
router.get("/food-and-restaurants", (req, res)=>{
    res.render("food-and-restaurants");
});
router.get("/my-decision", (req, res)=>{
    res.render("my-decision");
});
router.get("/saturday-12-june-2021", (req, res)=>{
    res.render("saturday-12-june-2021");
});
router.get("/saturday-19-june-2021", (req, res)=>{
    res.render("saturday-19-june-2021");
});

module.exports = router;