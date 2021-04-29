const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
// const mapProperties = require('./propertyMap');

module.exports = {
    config,
    path: function(Item) {
        return [
            Item.ItemSearchCategory.Name
        ];
    },
    // build: () => buildAPI(config, mapProperties)
};
