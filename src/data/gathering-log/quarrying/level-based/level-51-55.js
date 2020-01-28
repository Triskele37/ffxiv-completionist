import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_51_55 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-51-55`;

    return {
        name: "Levels 51-55",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "51",
                name: "Mythrite Sand",
                zone: "Coerthas Western Highlands",
                location: "Twinpools"
            }, {
                level: "52",
                name: "Yellow Quartz",
                zone: "The Churning Mists",
                location: "The House of Letters"
            }, {
                level: "55",
                name: "Green Quartz",
                zone: "The Churning Mists",
                location: "The House of Letters"
            },
        ],
    };
};
