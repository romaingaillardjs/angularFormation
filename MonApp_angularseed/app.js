
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
  db = require('./db.js');
  URL = 'mongodb://romain.gaillard:romain5589@ds021289.mlab.com:21289/contactlist';

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
// JSON API
app.get('/api/name', api.name);
// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


app.post('/api/test', function(req,res,next){
  console.log('JE PASSE BIEN COTE SERVEUR');
  console.log(req.body.truc);
var collection = db.get().collection('macollectionTest');
    collection.insert({corps:req.body.truc}, function(err, result) {
  
      collection.find().toArray(function(err,data) {
        
        res.json({ articles : data});
      });
    });
});
/**
 * Start Server
 */
db.connect(URL, function(err, db) {
  if (err) {
    console.log(err);
  }else{
    console.log('connect to database' +  URL);
  }
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
});