var providerCreators = require('../../../data-providers');
var restClient = require('./restClient');
var scrapper = require('./scrapper');
var { getSession } = require('../sessions');

var search = function(searchTerm, uuid) {
    searchTerm = encodeURI(searchTerm);

    var providers = (function createProviders(){
        return Object.keys(providerCreators).map(item => {
            return providerCreators[item]({
                searchTerm
            });
        });
    }());

    var promises = [];

    providers.forEach(function(prov) {
        if (prov.providerType === 'scrapper') {
            promises.push(scrapper(prov));
        } else if (prov.providerType === 'rest') {
            promises.push(restClient(prov));
        }
    });

    promises.forEach(function(pr) {
        Promise.resolve(pr).then(function(results){
            if (getSession(uuid)) getSession(uuid).emit('results', results);
        });
    });
}

module.exports = search;
