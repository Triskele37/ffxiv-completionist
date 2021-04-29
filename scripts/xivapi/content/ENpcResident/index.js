const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
// const mapProperties = require('./propertyMap');

module.exports = {
    config,
    path: function(ENpcResident) {
        return [];
    },
    // build: () => buildAPI(config, mapProperties)
};
