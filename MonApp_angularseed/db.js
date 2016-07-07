var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var state = {
  db: null,
};

exports.connect = function(url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return done(err);
    }
    state.db = db;
    done();
  });
};

exports.get = function() {
  return state.db;
};

exports.makeObjectId = function(idGet) {
  idGet = new objectId(idGet);
  return idGet;
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      if (err) {
        done(err);
      }
    });
  };
};