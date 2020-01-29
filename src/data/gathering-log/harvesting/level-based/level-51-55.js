import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_51_55 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-51-55`;

    return {
        name: "Levels 51-55",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "51",
        name: "Rainbow Cotton Boll",
        zone: "Coerthas Western Highlands",
        location: "Twinpools"
    }, {
        level: "52",
        name: "Pearl Sprout Seeds",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "52",
        name: "Pearl Sprouts",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "52",
        name: "Mist Dill",
        zone: "Coerthas Western Highlands",
        location: "Twinpools"
    }, {
        level: "53",
        name: "Coerthan Tea Leaves",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "53",
        name: "Coerthan Tea Seeds",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "53",
        name: "Cyclops Onion",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "53",
        name: "Highland Wheat",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "54",
        name: "Stalk of Ramie",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "55",
        name: "Chives",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "55",
        name: "Emerald Beans",
        zone: "The Churning Mists",
        location: "Landlord Colony"
    }, {
        level: "55",
        name: "Magma Beet",
        zone: "The Churning Mists",
        location: "Landlord Colony"
    },
];
