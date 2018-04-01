var mongoose = require('mongoose');

var production = process.env.PRODUCTION;
var mongoHost = process.env.MONGO_HOST;
var mongoDatabaseName = process.env.MONGO_DATABASE_NAME;
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;

module.exports = function setupDatabase() {
  var mongoDB = production ? `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:27017/${mongoDatabaseName}` : `mongodb://${mongoHost}/${mongoDatabaseName}`;
  console.log(`trying to connect with ${mongoDB}`);
  mongoose.connect(mongoDB);
  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
