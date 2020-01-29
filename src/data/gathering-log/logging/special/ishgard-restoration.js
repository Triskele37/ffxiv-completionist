import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Special_Ishgard_Restoration_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "5",
        name: "Skybuilders' Yew Log",
        zone: "East Shroud",
        location: "The Honey Yard"
    }, {
        level: "35",
        name: "Skybuilders' Ash Log",
        zone: "Central Shroud",
        location: "Sorrel Haven"
    }, {
        level: "60",
        name: "Skybuilders' Camphorwood Log",
        zone: "The Churning Mists",
        location: "Gron Rhei"
    }, {
        level: "65",
        name: "Skybuilders' Urunday Log",
        zone: "The Peaks",
        location: "Gyrmm & Enid"
    }, {
        level: "80",
        name: "Skybuilders' White Ash Log",
        zone: "The Rak'tika Greatwood",
        location: "Bowrest"
    }, {
        level: "80",
        name: "Skybuilders' Resin",
        zone: "The Rak'tika Greatwood",
        location: "Bowrest"
    }
];
