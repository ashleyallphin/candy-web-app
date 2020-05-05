//DEPENDENCIES
//require express
var express = require("express");

//I think Julia said I don't need this.
var bodyParser = require('body-parser');

//method override
//https://www.npmjs.com/package/method-override
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
var methodOverride = require("method-override");
//require handlebars
var exphhbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));


//I can get rid of this, I think.
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphhbs({
    //main.handlebars
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/candy_controller.js');
app.use('/', routes);

app.listen(PORT);
console.log("App listening on port: http://localhost:" + PORT);

