import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Coerthan_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthan-folklore`;

    return {
        name: "Coerthan Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "60★",
                name: "Dravanian Paprika",
                zone: "Coerthas Western Highlands",
                location: "The Bed of Bones"
            }, {
                level: "60★",
                name: "Vanilla Beans",
                zone: "Coerthas Western Highlands",
                location: "The Watcher"
            }, {
                level: "60★",
                name: "Frost Cotton Boll",
                zone: "Coerthas Western Highlands",
                location: "Gorgagne Holding"
            },
        ]
    };
};
