var express = require('express')
var app = express();

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
    res.render('samsung')
})
app.get('/sony',function(req,res){
    res.render('sony')
})
app.get('/panasonic',function(req,res){
    res.render('panasonic')
})
app.listen(5500,function(){
    console.log("Listening on post 5500")
})