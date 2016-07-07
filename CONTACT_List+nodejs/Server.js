
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),

  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
  db = require('./db.js');
  URL = 'mongodb://romain.gaillard:romain5589@ds021289.mlab.com:21289/contactlist';

var app = module.exports = express();


/**
 * Configuration
 */

// app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));

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

// JSON API
app.get('api/name', api.name);
// redirect all others to the index (HTML5 history)
app.get('*', function (req,res) {
  res.sendfile('index.html', function (succes,err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent :) :)  :)  :)');
    }
  });
});


app.post('/test', function(req,res,next){
  console.log('JE PASSE BIEN COTE SERVEUR');
  console.log(req.body.name);
var collection = db.get().collection('macollectionTest');

    if (req.body.name) { 
      
        console.log(collection);
        console.log(req.body.length);
       collection.insert({corps:req.body});
        
          collection.find().toArray(function(err,data) {
            res.json({ articles : data});
          });    
    
    }
    else{
        collection.find().toArray(function(err,data) {
            
            console.log(data)
            res.json({ articles : data});
        }); 

    }
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
});

app.listen(3000);