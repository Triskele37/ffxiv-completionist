const constants = require("../../../../../constants");
const utils = require("../../../../../utils");

module.exports = function mapCacheTask(apiObj) {
    // Can potentially add leve type as a column
    // No connection to NPC leve giver available

    // Company Leves
    let CompanyNames = {};
    if(!!apiObj.CompanyLeve) {
        const company = apiObj.JournalGenre.Name.replace(" Levequests", "");
        CompanyNames = { ...utils.spreadLangs(constants.COMPANIES[company], "Company") };
    }

    return {
        "ID": apiObj.ID,
        "Level": apiObj.ClassJobLevel,
        ...utils.spreadLangs(apiObj, "Name"),
        ...utils.spreadLangs(apiObj.PlaceNameIssued, "Name", "IssueLocation"),
        ...utils.spreadLangs(apiObj.PlaceNameStartZone, "Name", "LeveZone"),
        ...CompanyNames
    }
};
