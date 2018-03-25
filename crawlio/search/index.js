(function () {
  // Dependencies
  var cors = require('cors');
  var express = require('express');
  var app = express();
  var path = require('path');
  var http = require('http').Server(app);
  var webSocket = require('./src/websocket');

  var run = function () {
    http.listen(5000, function () {
      console.log('Listening in port 5000');
    });
  };

  var configureApp = function () {
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../front-end/build')));
    app.use(require('./src/routes'));
    webSocket(http);
  };

  configureApp();
  run();

  module.exports = app;
}());
