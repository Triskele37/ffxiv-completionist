import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_51_55 = function(parentStorageKey) {
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
        name: "Pyrite",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "51",
        name: "Raw Agate",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes"
    }, {
        level: "52",
        name: "Raw Tiger's Eye",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes"
    }, {
        level: "53",
        name: "Chalcocite",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "53",
        name: "Mythrite Ore",
        zone: "Coerthas Western Highlands",
        location: "Gorgagne Holding"
    }, {
        level: "53",
        name: "Raw Larimar",
        zone: "Coerthas Western Highlands",
        location: "Gorgagne Holding"
    }, {
        level: "54",
        name: "Dravanian Spring Warer",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes"
    }, {
        level: "54",
        name: "Limonite",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "54",
        name: "Raw Mormorion",
        zone: "Coerthas Western Highlands",
        location: "Gorgagne Holding"
    }, {
        level: "55",
        name: "Raw Star Ruby",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "55",
        name: "Raw Star Sapphire",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "55",
        name: "Titanium Ore",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    },
];
