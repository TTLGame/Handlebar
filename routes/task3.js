var express = require('express')
var router = express.Router()
var data = require('../data.js')
var products = data.products
var categories = data.categories

router.get('/',function(req,res){
    res.locals.foot = "18127143 - Trinh Thanh Long"
    var context = {
        products:products}
    res.render('product',context)
})
router.get('/:id',function(req,res){
    var id = req.params.id
    var pos =categories.find((ele)=>{
        return ele.title === id
        
    })
    
    var context = {
        products: products.filter((ele)=>{
            return ele.category === pos.id
        })
    }
    res.locals.foot = "18127143 - Trinh Thanh Long"
    res.render('product',context)
})

router.get('/sony',function(req,res){
    var pos =categories.find((ele)=>{
        return ele.title === "Sony"
        
    })
    
    var context = {
        products: products.filter((ele)=>{
            return ele.category == pos.id
        })
    }
    res.locals.foot = "18127143 - Trinh Thanh Long"

    res.render('product',context)
})
router.get('/panasonic',function(req,res){
    var pos =categories.find((ele)=>{
        return ele.title === "Panasonic"
        
    })
    
    var context = {
        products: products.filter((ele)=>{
            return ele.category == pos.id
        })
    }
    res.locals.foot = "18127143 - Trinh Thanh Long"

    res.render('product',context)
})
module.exports = router;