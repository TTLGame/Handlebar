var express = require('express');
var router = express.Router();

var read = require('../data');
var data = read.emotion;
router.get('/',function(req,res){
    res.render('Emotion_default');
})
router.get('/:id',function(req,res){
    var id = req.params.id;
    var emotion = data.find((e)=>{
        return e.title===id;
    })
    res.locals.Emotion = emotion;
    res.render('Emotion');
})
module.exports = router;