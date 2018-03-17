(function() {
  // Dependencies
  var cors = require('cors');
  var app = require('express')();
  var http = require('http').Server(app);
  var webSocket = require('./src/websocket');

  var run = function() {
    http.listen(5000, function() {
      console.log('Listening in port 5000');
    });
  };

  var configureApp = function() {
    app.use(cors());
    app.use(require('./src/routes'));
    webSocket(http);
  };

  configureApp();
  run();

  module.exports = app;
})();
