import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_41_45 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-41-45`;

    return {
        name: "Levels 41-45",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "42",
        name: "Electrum Sand",
        zone: "Upper La Noscea",
        location: "Bronze Lake"
    }, {
        level: "45",
        name: "Marble",
        zone: "Upper La Noscea",
        location: "Bronze Lake"
    },
];
