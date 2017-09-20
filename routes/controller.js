var express = require("express");

var router = express.Router();
// var menu = require("../model/menu.json");

router.get("/",function(req,res){
    res.render('home');
});

router.get("/about",function(req,res){
    res.render('about');
});

router.get("/contact",function(req,res){
    res.render('contact');
});

router.get("/project",function(req,res){
    res.render('project');
});


module.exports = router;