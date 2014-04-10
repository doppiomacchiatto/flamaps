var express = require("express");
var routes = require('./routes')
 , about = require('./routes/about')
 , fla = require('./routes/flamil')
 , census = require('./routes/flcen');
var app = express();
var http = require("http");

app.use('/public', express.static(__dirname+'/public'));
app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/images",  express.static(__dirname + '/public/images'));

// Set the view directory to /views
app.set('port', process.env.PORT || 5000);
app.set("views", __dirname + "/views");
//app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get("/v1/map/flacensus", function (req, res){
	res.render("flacensus.html");
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/about', about.me);
app.get('/v1/map/flamil', fla.mil);
app.get('/v1/map/flcen',census.flcen);
//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});
app.listen(port, function() {
  console.log("Listening on " + port);
});
