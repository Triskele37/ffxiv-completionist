import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_26_30 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-26-30`;

    return {
        name: "Levels 26-30",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "26",
        name: "Jade Peas",
        zone: "North Shroud",
        location: "Alder Springs"
    }, {
        level: "26",
        name: "Fire Crystal",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "26",
        name: "Ice Crystal",
        zone: "Coerthas Western Highlands",
        location: "Twinpools"
    }, {
        level: "26",
        name: "Wind Crystal",
        zone: "The Dravanian Hinterlands",
        location: "The Answering Quarter"
    }, {
        level: "26",
        name: "Earth Crystal",
        zone: "The Churning Mists",
        location: "Landlord Colony"
    }, {
        level: "26",
        name: "Lightning Crystal",
        zone: "The Sea of Clouds",
        location: "The Blue Window"
    }, {
        level: "26",
        name: "Water Crystal",
        zone: "The Ruby Sea",
        location: "The Isle of Bekko"
    }, {
        level: "27",
        name: "Wizard Eggplant",
        zone: "North Shroud",
        location: "Alder Springs"
    }, {
        level: "27",
        name: "Wizard Eggplant Seeds",
        zone: "North Shroud",
        location: "Alder Springs"
    }, {
        level: "28",
        name: "Midland Cabbage",
        zone: "North Shroud",
        location: "Alder Springs"
    }, {
        level: "28",
        name: "Midland Cabbage Seeds",
        zone: "North Shroud",
        location: "Alder Springs"
    }, {
        level: "30",
        name: "Moor Leech",
        zone: "North Shroud",
        location: "Alder Springs"
    },
];
