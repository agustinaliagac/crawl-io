var router = require('express').Router();
var uuidv4 = require('uuid/v4');
var search = require('../search');
var path = require('path');

router.get('/api/search', function (req, res) {
  var uuid = uuidv4();
  var searchTerm = encodeURI(req.query.searchTerm);

  if (searchTerm === 'undefined') {
    res.status(400).send('No search parameter!');
    return;
  }

  search(searchTerm, uuid);

  res.send({
    searchTerm,
    uuid,
  });
});

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../front-end/build', 'index.html'));
});

module.exports = router;
