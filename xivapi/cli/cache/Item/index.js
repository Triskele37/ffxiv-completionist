const config = require('./cacheConfig');

module.exports = {
    ItemConfig: config,
    ItemPath: function(Item) {
        return [
            Item.ItemSearchCategory.Name
        ];
    }
};
