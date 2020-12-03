var express = require('express');
var app = express();

app.use(express.static(__dirname ));
var hbs = require('express-handlebars');
app.engine('hbs',hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}))
app.set('view engine','hbs');
app.set('port',(process.env.PORT || 5000));
//Question 2
var Emotion_router = require('./routes/task2')
app.use('/Emotion',Emotion_router);


app.listen(app.get('port'),function(){
    console.log("Listenning "+ app.get('port'));
});
