var router = require('express').Router();
var uuidv4 = require('uuid/v4');
var search = require('../search');

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

module.exports = router;
