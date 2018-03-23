var axios = require('axios');

var restClient = function(provider) {
    var { items, title, price, link, thumbnail } = provider.providerData.payloadProperties;
    return axios.get(provider.providerData.url).then(function(response) {
        var results = response.data[items]
            .map(function(item){
                return {
                    title: item[title],
                    price: item[price],
                    link: item[link],
                    thumbnail: item[thumbnail],
                    providerName: provider.providerData.name,
                };
            });

        return {
            providerName: provider.providerData.name,
            results
        };
    })
    .catch(function(error) {
        console.error(error);
    });
}

module.exports = restClient;
