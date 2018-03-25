/* eslint-disable no-restricted-syntax, no-unused-expressions */

var { expect } = require('chai');
var sessions = require('../src/sessions/');
var uuidv4 = require('uuid/v4');

describe('Sessions', function () {
  it('should store sessions in a dictionary', function () {
    var uuid = uuidv4();
    var socket = `socket${uuid}`;
    sessions.injectSession(uuid, socket);
    expect(sessions.getSession(uuid)).to.eql(socket);
  });
});
