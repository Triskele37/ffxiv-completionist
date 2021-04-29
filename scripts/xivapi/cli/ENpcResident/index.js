const buildAPI = require('../util/buildAPI');

const config = require('./config');
// const mapProperties = require('./propertyMap');

module.exports = {
    ENpcResidentConfig: config,
    ENpcResidentPath: function(ENpcResident) {
        return [];
    },
    // ENpcResidentBuild: () => buildAPI(config, mapProperties)
};
