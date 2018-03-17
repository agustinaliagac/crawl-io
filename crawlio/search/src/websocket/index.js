var { injectSession } = require('../sessions');

module.exports = function(http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket) {
        var searchTerm = socket.handshake.query.searchTerm;
        var uuid = socket.handshake.query.uuid;
        injectSession(uuid, socket);
    });

    console.log('Websocket started !');
};
