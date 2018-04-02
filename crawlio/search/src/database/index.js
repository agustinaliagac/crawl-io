var mongoose = require('mongoose');

var mongoHost = process.env.MONGO_HOST;
var mongoDatabaseName = process.env.MONGO_DATABASE_NAME;

module.exports = function setupDatabase() {
  var mongoDB = `mongodb://${mongoHost}/${mongoDatabaseName}`;
  console.log(`trying to connect with ${mongoDB}`);
  mongoose.connect(mongoDB);
  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
