var express = require('express');
var app = express();

var footer = function (Name)
{
    return Name;
}

app.use(express.static(__dirname ));
var hbs = require('express-handlebars');
app.engine('hbs',hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers:{
        footer: footer
    }
}));

app.set('view engine','hbs');
app.set('port',(process.env.PORT || 5000));



app.get('/',function(req,res){
    res.sendfile('index.htm'); 

})
//Question 1
app.get('',function(req,res){
    res.sendFile(__dirname + '/index.htm');

})

app.get('/task1.htm',function(req,res){
    res.sendFile(__dirname + '/task1.htm');

})
app.get('/Cal', function(req, res) {
   
    var Salary = req.query.salary
    
    var context = {
        S : Salary,
        X5: 5*Salary/100,
        X10:10*Salary/100,
        X55:55*Salary/100,
    }

    res.render('index.hbs', context)
 
});

//Question 2
var Emotion_router = require('./routes/task2')
app.use('/Emotion',Emotion_router);


//Question 3
var Product_router = require('./routes/task3')
app.use('/Product',Product_router)
//Question 4
var Zodiac_router = require('./routes/task4')
app.use('/Zodiac',Zodiac_router);

app.listen(app.get('port'),function(){
    console.log("Listenning "+ app.get('port'));
});