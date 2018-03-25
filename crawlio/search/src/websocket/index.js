var { injectSession } = require('../sessions');

module.exports = function (http) {
  var io = require('socket.io')(http);

  io.on('connection', function (socket) {
    var { uuid } = socket.handshake.query;
    injectSession(uuid, socket);
  });

  console.log('Websocket started !');
};
