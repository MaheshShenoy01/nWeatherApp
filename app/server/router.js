var express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
	res.render('index',{title:'title',heading:'index page'});
})
router.get('/home',(req,res)=>{
	res.render('home',{title:'home',heading:'home page'});
})
router.get('/login',(req,res)=>{
	res.render('login',{title:'login',heading:'login page'});
})


module.exports=router;