var express = require('express');
var router = express.Router();

var data = require('../data');
router.get('/',function(req,res){
    res.render('Zodiac');
})
router.get('/:id',function(req,res){
    var id = req.params.id;
    var zodiac = data.find((ele)=>{
        return ele.name===id;
    })
    res.locals.Zodiac = zodiac;
    res.render('Zodiac_detail');
})
module.exports = router;