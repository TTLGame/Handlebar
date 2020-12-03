var express = require('express');
var app = express();

app.use(express.static(__dirname))
var hbs  = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    layoutsDir: __dirname + '/views/partials/',

}));
app.set('view engine', 'hbs');

app.get('',function(req,res){
    res.sendFile(__dirname + '/index.htm');
    console.log("index");
})

app.get('/task1.htm',function(req,res){
    res.render()

})

app.get('/Cal', function(req, res) {
    
    var context = {
        X5: 5,
        X10:10,
        X55:55
    }
    res.render('index.hbs', context)
 
});

app.listen(5500,function(){
    console.log("Listening");
});


