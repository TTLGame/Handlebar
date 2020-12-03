var express = require('express');
var router = express.Router();

var data_read = require('../data');
var data = data_read.zodiacs;
router.get('/',function(req,res){
    res.locals.foot = "18127142 - Trinh Hoang Long"

    res.render('Zodiac');
})
router.get('/:id',function(req,res){
    var id = req.params.id;
    var zodiac = data.find((ele)=>{
        return ele.name===id;
    })
    res.locals.Zodiac = zodiac;
    res.locals.foot = "18127142 - Trinh Hoang Long"

    res.render('Zodiac_detail');
})
module.exports = router;