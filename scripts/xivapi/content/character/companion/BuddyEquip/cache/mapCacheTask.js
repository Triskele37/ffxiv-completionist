const utils = require("../../../../../utils");

module.exports = function mapCacheTask(apiObj) {
    return {
        "ID": apiObj.ID,
        "Order": apiObj.Order,
        ...utils.spreadLangs(apiObj, "Name"),
    }
};
