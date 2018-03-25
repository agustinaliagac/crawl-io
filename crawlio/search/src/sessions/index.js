var sessions = (function initializeSessionsMap() {
  return {};
}());

var injectSession = function (uuid, socket) {
  sessions[uuid] = socket;
};

var getSession = function (uuid) {
  return sessions[uuid];
};

module.exports = {
  injectSession,
  getSession,
};
