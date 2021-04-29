const buildAPI = require('../util/buildAPI');

const config = require('./config');
// const mapProperties = require('./propertyMap');

module.exports = {
    ItemConfig: config,
    ItemPath: function(Item) {
        return [
            Item.ItemSearchCategory.Name
        ];
    },
    // ItemBuild: () => buildAPI(config, mapProperties)
};
