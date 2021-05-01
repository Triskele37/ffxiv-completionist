const fs = require("fs");
const constants = require("../../../constants");
const utils = require("../../../utils");

module.exports = function mapCacheTask(apiObj) {
    const stars = new Array(apiObj.GatheringItemLevel.Stars).fill("★").join("");

    return {
        "ID": apiObj.ItemTargetID,
        "ILvl": `${apiObj.GatheringItemLevel.GatheringItemLevel}${stars ? ' ' + stars : ''}`,
        // "IsHidden": apiObj.IsHidden,
        "IsInLog": apiObj.IsInLog,

        // Name
        ...utils.spreadLangs(apiObj.Item, "Name"),

        // Location & Fishing Hole
        ...getFishingHole(apiObj),

        // Type
        ...getType(apiObj),
    };
};

function getType(apiObj) {
    const typeExists = apiObj.FishingRecordType && apiObj.FishingRecordType.Addon;

    return {
        Text_de: typeExists ? apiObj.FishingRecordType.Addon.Text_de : "",
        Text_en: typeExists ? apiObj.FishingRecordType.Addon.Text_en : "",
        Text_fr: typeExists ? apiObj.FishingRecordType.Addon.Text_fr : "",
        Text_ja: typeExists ? apiObj.FishingRecordType.Addon.Text_ja : "",
    };
}

function getFishingHole(apiObj) {
    const basePath = `${constants.CACHE_DIR}/fishingspot`;
    const fishingSpots = fs.readdirSync(basePath);

    for(let i = 0; i < fishingSpots.length; i++) {
        const spot = fs.readFileSync(`${basePath}/${fishingSpots[i]}`);

        for(let j = 0; j < 10; j++) {
            if(spot[`Item${j}TargetID`] === apiObj.ItemTargetID) {
                return {
                    ...utils.spreadLangs(spot.TerritoryType.PlaceName, "Name", "Location"),
                    ...utils.spreadLangs(spot.PlaceName, "Name", "FishingHole")
                };
            }
        }
    }

    return {};
}
