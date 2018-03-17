var router = require('express').Router();
var uuidv4 = require('uuid/v4');
var search = require('../search');
const path = require('path');

router.get('/api/search', function(req, res) {
  var searchTerm = encodeURI(req.query.searchTerm);

  if (searchTerm === 'undefined') {
    res.status(400).send('No search parameter!');
    return;
  }

  var uuid = uuidv4();

  search(searchTerm, uuid);

  res.send({
    searchTerm: searchTerm,
    uuid: uuid,
  });
});

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../front-end/build', 'index.html'));
});

module.exports = router;
