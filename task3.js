var express = require('express')
var app = express();
var data = require('./data.js')
var products = data.products
var categories = data.categories
var pos_categories = 0
app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.htm')
})
app.use(express.static(__dirname))
var hbs = require('express-handlebars')
app.engine('hbs',hbs({
    extname: 'hbs',
    defaultLayout: 'task3',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')

app.get('/samsung',function(req,res){
    var pos =categories.find((ele)=>{
        return ele.title === "Samsung"
        
    })
    
    var context = {
        products: products.filter((ele)=>{
            return ele.category == pos.id
        })
    }
    
    res.render('product',context)
})
app.get('/sony',function(req,res){
    var pos =categories.find((ele)=>{
        return ele.title === "Sony"
        
    })
    
    var context = {
        products: products.filter((ele)=>{
            return ele.category == pos.id
        })
    }
    res.render('product',context)
})
app.get('/panasonic',function(req,res){
    var pos =categories.find((ele)=>{
        return ele.title === "Panasonic"
        
    })
    
    var context = {
        products: products.filter((ele)=>{
            return ele.category == pos.id
        })
    }
    res.render('product',context)
})
app.listen(5000,function(){
    console.log("Listening on post 5000")
})