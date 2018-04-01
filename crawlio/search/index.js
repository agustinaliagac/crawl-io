(function () {
  // Dependencies
  var cors = require('cors');
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  var path = require('path');
  var http = require('http').Server(app);
  var webSocket = require('./src/websocket');
  var setupDatabase = require('./src/database');

  var run = function () {
    http.listen(5000, function () {
      console.log('Listening in port 5000');
    });
  };

  var configureApp = function () {
    app.use(cors());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(express.static(path.join(__dirname, '../front-end/build')));
    app.use(require('./src/routes'));
    webSocket(http);
    setupDatabase();
  };

  configureApp();
  run();

  module.exports = app;
}());
