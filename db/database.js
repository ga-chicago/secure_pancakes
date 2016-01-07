// give all the things all the secrets to use!
require('dotenv').load();

var mongoose = require('mongoose');
var connectionString = process.env.DATABASE_URL || process.env.MONGOLAB_URI;

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Making pancakes, makin\' bacon pancakes');
});


mongoose.connection.on('error', function(err) {
  console.log(err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Jeff had too many pancakes');
});
