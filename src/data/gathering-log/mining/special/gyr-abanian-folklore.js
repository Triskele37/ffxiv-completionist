import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Special_Gyr_Abanian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abanian-folklore`;

    return {
        name: "Gyr Abanian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "70★",
        name: "Chromite Ore",
        zone: "The Peaks",
        location: "Wightrock"
    }, {
        level: "70★",
        name: "Gyr Abanian Spring Water",
        zone: "The Peaks",
        location: "Wightrock"
    }, {
        level: "70★★★",
        name: "Gyr Abanian Ore",
        zone: "The Fringes",
        location: "Virdjala"
    }, {
        level: "70★★★",
        name: "Evergleam Ore",
        zone: "The Lochs",
        location: "Loch Seld"
    },
];
