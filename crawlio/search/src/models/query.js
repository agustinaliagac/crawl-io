var mongoose = require('mongoose');

var { Schema } = mongoose;

var CrawlioSearchSchema = new Schema({
  selected: Object,
  results: Array,
  searchTerm: String,
});

var CrawlioSearch = mongoose.model('CrawlioSearch', CrawlioSearchSchema);

module.exports = CrawlioSearch;
